const { instagramGetUrl } = require("instagram-url-direct");
const { downloadMedia } = require("@juliendu11/instagram-downloader");

async function test() {
    const url = 'https://www.instagram.com/reel/C3F7x__PoX_/';
    console.log('Testing with URL:', url);

    console.log('\n--- Testing instagram-url-direct ---');
    try {
        const result1 = await instagramGetUrl(url);
        // It returns a Promise that resolves to the result.
        console.log('Result (instagram-url-direct):', JSON.stringify(result1, null, 2));
    } catch (error) {
        console.error('Error (instagram-url-direct):', error.message);
    }

    console.log('\n--- Testing @juliendu11/instagram-downloader ---');
    try {
        const result2 = await downloadMedia(url);
        console.log('Result (@juliendu11/instagram-downloader):', JSON.stringify(result2, null, 2));
    } catch (error) {
        console.error('Error (@juliendu11/instagram-downloader):', error.message);
    }
}

test();
