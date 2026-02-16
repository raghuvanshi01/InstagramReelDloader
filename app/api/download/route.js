import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';

export async function POST(request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        console.log(`Processing URL: ${url}`);

        // Determine binary based on OS
        const isLinux = os.platform() === 'linux';
        const binaryName = isLinux ? 'yt-dlp-linux' : 'yt-dlp';

        // Path to the downloaded yt-dlp binary
        // In Vercel serverless functions, process.cwd() is the root of the project usually.
        const ytDlpPath = path.join(process.cwd(), binaryName);

        // Check if binary exists
        if (!fs.existsSync(ytDlpPath)) {
            console.error('yt-dlp binary not found at', ytDlpPath);
            console.log('Available files in cwd:', fs.readdirSync(process.cwd()));
            return NextResponse.json({ error: 'Server configuration error: Downloader not found' }, { status: 500 });
        }

        // Ensure executable permission
        try {
            fs.chmodSync(ytDlpPath, '755');
        } catch (e) {
            console.error('Failed to chmod binary:', e);
        }

        // Arguments for yt-dlp
        const args = [
            url,
            '--dump-single-json',
            '--no-warnings',
            '--no-call-home',
            '--no-check-certificate',
            '--prefer-free-formats',
            '--youtube-skip-dash-manifest',
            '--referer', 'https://www.instagram.com/',
            // User agent to mimic a real browser
            '--user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ];

        return new Promise((resolve) => {
            execFile(ytDlpPath, args, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
                if (error) {
                    console.error('yt-dlp error:', error);
                    console.error('yt-dlp stderr:', stderr);

                    if (stderr.includes('Instagram API is not granting access') || stderr.includes('login') || stderr.includes('429')) {
                        resolve(NextResponse.json({ error: 'Instagram is blocking access from this server IP. Try running locally.' }, { status: 429 }));
                        return;
                    }

                    resolve(NextResponse.json({ error: 'Failed to fetch media. Ensure the link is valid and public.' }, { status: 500 }));
                    return;
                }

                try {
                    const output = JSON.parse(stdout);

                    // Determine media type and structure
                    let mediaType = 'video';
                    let mediaList = [];

                    // yt-dlp "entries" indicates a sidecar/carousel or playlist
                    if (output.entries) {
                        mediaType = 'carousel';
                        mediaList = output.entries.map(entry => ({
                            url: entry.url,
                            thumbnail: entry.thumbnail,
                            type: entry.vcodec === 'none' ? 'image' : 'video' // rudimentary check
                        }));
                    } else {
                        // Single item
                        // Check if it's strictly an image (no video codecs)
                        if (output.vcodec === 'none' && output.ext !== 'mp4') {
                            mediaType = 'image';
                        }

                        mediaList = [{
                            url: output.url,
                            thumbnail: output.thumbnail,
                            type: mediaType
                        }];
                    }

                    resolve(NextResponse.json({
                        type: mediaType,
                        media: mediaList,
                        title: output.title,
                        author: output.uploader,
                        author_url: output.uploader_url,
                        description: output.description
                    }));
                } catch (parseError) {
                    console.error('JSON parse error:', parseError);
                    resolve(NextResponse.json({ error: 'Failed to parse media data' }, { status: 500 }));
                }
            });
        });

    } catch (error) {
        console.error('API Handler Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
