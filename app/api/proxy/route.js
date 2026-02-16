export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    const filename = searchParams.get('filename') || 'insta-saver-media.mp4';

    if (!url) {
        return new Response('Missing URL parameter', { status: 400 });
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch media: ${response.statusText}`);

        const contentType = response.headers.get('content-type');
        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${filename}"`);
        headers.set('Content-Type', contentType);

        return new Response(response.body, {
            status: 200,
            headers: headers,
        });
    } catch (error) {
        console.error('Proxy error:', error);
        return new Response('Failed to download media', { status: 500 });
    }
}
