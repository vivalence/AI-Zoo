export async function GET() {
	// Example of manually defined pages, replace this with dynamic content fetching if needed
	const pages = [
		{ url: '/', changefreq: 'daily', priority: 1.0 }
		// { url: '/about', changefreq: 'monthly', priority: 0.7 },
		// { url: '/contact', changefreq: 'monthly', priority: 0.7 }
	];

	const xml = pages
		.map(
			(page) => `
        <url>
            <loc>https://www.yoursite.com${page.url}</loc>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority}</priority>
        </url>
    `
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${xml}
        </urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
