export default function JsonLd() {
    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "InstaSaver",
        "url": "https://instasaver.co.in",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Download Instagram Reels, Photos, and Carousels in high quality without watermarks. Free online tool — no login required."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How to download Instagram Reels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open Instagram, copy the link of the Reel you want to download, paste it into InstaSaver, and click the Download button. Your video will be ready in seconds."
                }
            },
            {
                "@type": "Question",
                "name": "Is InstaSaver free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, InstaSaver is 100% free to use. You can download unlimited Instagram Reels, Photos, and Carousels without any cost or signup."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to login to Instagram to download?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you do not need to log in to your Instagram account. Simply paste the link and download."
                }
            },
            {
                "@type": "Question",
                "name": "Can I download Instagram Reels without watermark?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, InstaSaver downloads Instagram Reels in their original quality without any watermarks."
                }
            },
            {
                "@type": "Question",
                "name": "Does InstaSaver work on mobile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, InstaSaver works on all devices including iPhones, Android phones, tablets, and desktop computers through any web browser."
                }
            },
            {
                "@type": "Question",
                "name": "Can I download from private Instagram accounts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, InstaSaver only supports downloading media from public Instagram accounts to respect user privacy."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
