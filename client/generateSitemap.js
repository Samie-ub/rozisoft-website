const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Replace these URLs with your actual URLs
const urls = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/about-us', changefreq: 'weekly', priority: 0.5 },
  { url: '/contact-us', changefreq: 'weekly', priority: 0.5 },
  { url: '/service', changefreq: 'weekly', priority: 0.5 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.5 },
  { url: '/search-engine-optimization', changefreq: 'weekly', priority: 0.5 },
  { url: '/web-designing--&-development', changefreq: 'weekly', priority: 0.5 },
  { url: '/social-media-marketing', changefreq: 'weekly', priority: 0.5 },
  { url: '/graphic-designing', changefreq: 'weekly', priority: 0.5 },
  { url: '/pay-per-click', changefreq: 'weekly', priority: 0.5 },
  { url: '/content-writing', changefreq: 'weekly', priority: 0.5 },
  { url: '/digital-marketing', changefreq: 'weekly', priority: 0.5 },
  { url: '/link-building', changefreq: 'weekly', priority: 0.5 },
  { url: '/hospitality', changefreq: 'weekly', priority: 0.5 },
  { url: '/travel-tourism', changefreq: 'weekly', priority: 0.5 },
  { url: '/real-estate', changefreq: 'weekly', priority: 0.5 },
  { url: '/financial-service', changefreq: 'weekly', priority: 0.5 },
  { url: '/education', changefreq: 'weekly', priority: 0.5 },
  { url: '/news', changefreq: 'weekly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://rozisoft.com/' });

const streamPromise = streamToPromise(sitemap);

urls.forEach((url) => {
  sitemap.write(url);
});

sitemap.end();

streamPromise
  .then((sitemap) => {
    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
    console.log('Sitemap generated successfully.');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
