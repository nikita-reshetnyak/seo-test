const { SitemapStream, streamToPromise } = require( 'sitemap' )
    const { Readable } = require( 'stream' )
    const fs = require('fs');

    const hostname = 'https://scintillating-biscotti-625947.netlify.app';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 0.6 },
      { url: '/list', changefreq: 'daily', priority: 0.6 },
      { url: '/card/1', changefreq: 'hourly', priority: 1 },
      { url: '/card/2', changefreq: 'hourly', priority: 1 },
      { url: '/card/3', changefreq: 'hourly', priority: 1 },
      { url: '/card/4', changefreq: 'hourly', priority: 1 },
      { url: '/card/5', changefreq: 'hourly', priority: 1 },
      { url: '/card/6', changefreq: 'hourly', priority: 1 },
      { url: '/card/7', changefreq: 'hourly', priority: 1 },
      { url: '/card/8', changefreq: 'hourly', priority: 1 },
      { url: '/card/9', changefreq: 'hourly', priority: 1 },
      { url: '/card/10', changefreq: 'hourly', priority: 1 },
      { url: '/card/11', changefreq: 'hourly', priority: 1 },
      { url: '/card/12', changefreq: 'hourly', priority: 1 },
      { url: '/card/13', changefreq: 'hourly', priority: 1 },
      { url: '/card/14', changefreq: 'hourly', priority: 1 },
      { url: '/card/15', changefreq: 'hourly', priority: 1 },
      { url: '/card/16', changefreq: 'hourly', priority: 1 },
      { url: '/card/17', changefreq: 'hourly', priority: 1 },
      { url: '/card/18', changefreq: 'hourly', priority: 1 },
      { url: '/card/19', changefreq: 'hourly', priority: 1 },
      { url: '/card/20', changefreq: 'hourly', priority: 1 },
      // Add additional pages here
    ];
    
    // Create a stream to write to
    const stream = new SitemapStream( { hostname } )
    streamToPromise(Readable.from(urls).pipe(stream)).then((data) => {
        fs.writeFileSync('./public/sitemap.xml',  data.toString());
    }
    
  )
   