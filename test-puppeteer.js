const puppeteer = require('puppeteer');

async function scrapeReel(url) {
    console.log('Launching browser to scrape:', url);
    const browser = await puppeteer.launch({
        headless: 'new', // or true
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Set User Agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Wait for video element
        // Instagram videos are usually in <video> tags. 
        // We might need to handle login popup.

        // Try to find video src
        const videoSrc = await page.evaluate(() => {
            const video = document.querySelector('video');
            return video ? video.src : null;
        });

        if (videoSrc) {
            console.log('Found video source:', videoSrc);
        } else {
            console.log('Video element not found. Might be redirecting to login.');
            // Take screenshot to debug
            await page.screenshot({ path: 'debug-screenshot.png' });
        }

    } catch (error) {
        console.error('Scraping error:', error);
    } finally {
        await browser.close();
    }
}

scrapeReel('https://www.instagram.com/reel/C3F7x__PoX_/');
