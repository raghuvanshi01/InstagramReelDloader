import { Metadata, Route } from 'next';

export default function sitemap() {
    return [
        {
            url: 'https://instasaver.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]
}
