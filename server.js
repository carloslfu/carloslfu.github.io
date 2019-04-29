const isDev = process.env.NODE_ENV !== 'production';
// const envPath = isDev ? './.env-dev' : './.env';
// require('dotenv').config({ path: envPath });
const express = require('express');
const next = require('next');
const sm = require('sitemap');

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

const determinePriority = url => {
  if (url.includes('buy/')) {
    return 0.6;
  } else if (url.includes('blog/')) {
    return 0.8;
  } else {
    return 1.0;
  }
};

const createSitemap = res => {
  let urlRoutes = [''];

  let sitemap = sm.createSitemap({
    hostname: 'https://carloslfu.github.io',
    cacheTime: 60,
  });

  // Will be used for dynamic behavior
  urlRoutes.map(item => {
    sitemap.add({
      url: item,
      changefreq: 'daily',
      priority: determinePriority(item),
    });
  });

  res.send(sitemap.toString());
};

app
  .prepare()
  .then(async () => {
    const server = express();

    server.get('/sitemap.xml', (req, res) => {
      res.header('Content-Type', 'application/xml');
      createSitemap(res);
    });

    server.get('/api', (req, res) => {
      res.json({ name: 'Carlos Galarza data API', version: '0.1.0' });
    });

    server.get('*', (req, res) => {
      handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
