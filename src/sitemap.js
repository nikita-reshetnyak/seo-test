
    const { SitemapStream, streamToPromise } = require( 'sitemap' )
    const { Readable } = require( 'stream' )
    const fs = require('fs');

    const hostname = 'https://courageous-crumble-d0d48b.netlify.app';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/list', changefreq: 'daily', priority: 1 },
      // Add additional pages here
    ];
    
    // Create a stream to write to
    const stream = new SitemapStream( { hostname } )
    streamToPromise(Readable.from(urls).pipe(stream)).then((data) => {
        fs.writeFileSync('./public/sitemap.xml',  data.toString());
    }
    
  )
   