const igdl = require('@sasmeee/igdl');

async function test() {
    const url = 'https://www.instagram.com/reel/C3F7x__PoX_/';
    console.log('Testing @sasmeee/igdl with URL:', url);

    try {
        const data = await igdl(url);
        console.log('Result:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
