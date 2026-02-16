const youtubedl = require('youtube-dl-exec');

async function test() {
    const url = 'https://www.instagram.com/reel/C3F7x__PoX_/';
    console.log('Testing yt-dlp with URL:', url);

    try {
        const output = await youtubedl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
            referer: 'https://www.instagram.com/'
        });

        console.log('Title:', output.title);
        console.log('URL:', output.url); // This might be the direct video URL
        console.log('Thumbnail:', output.thumbnail);

        // Sometimes formats are nested
        if (!output.url && output.formats) {
            console.log('Found formats:', output.formats.length);
            const bestFormat = output.formats.sort((a, b) => b.width - a.width)[0];
            console.log('Best format URL:', bestFormat.url);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

test();
