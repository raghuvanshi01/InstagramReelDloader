import { MetadataRoute } from 'next';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://instasaver.vercel.app/sitemap.xml',
    }
}
