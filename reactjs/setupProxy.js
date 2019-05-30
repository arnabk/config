const proxy = require('http-proxy-middleware');
const path = require('path');
const fs = require('fs');

let url;
const boxNumber = process.argv[2]; // e.g. `yarn start 72` or `yarn start qa-72`

if (boxNumber) {
  if (boxNumber.startsWith('qa')) {
    // adds the missing "-" if it doesn't find it
    const str = boxNumber.startsWith('qa-') ? boxNumber : `${boxNumber.slice(0, 2)}-${boxNumber.slice(2)}`;
    url = `https://box-${str}.sofitest.com`;
  } else {
    url = `https://box-dev-${boxNumber}.sofitest.com`;
  }
} else {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  url = require(path.resolve(__dirname, '../package.json')).proxy;
}

const proxyConfig = {
  target: url,
  headers: { referer: url, origin: url },
  changeOrigin: true,
  // secure: true,
  xfwd: true,
};

/**
 * Logs to terminal after a set amount of time `ms`
 * @param {!number} ms time in milliseconds
 */
const logBox = ms => global.setTimeout(() => global.console.log(`\nℹ️  Using logibox box: ${url}\n`), ms);

const loginProxy = proxy({
  ...proxyConfig,
  onProxyRes: (proxyRes, req, res) => {
    const mockResponse = {
      '@type': 'InitResponse',
      validSession: false,
      endpoint: `https://localhost:3000/some/url`,
    };

    delete proxyRes.headers['content-encoding'];

    res.set(proxyRes.headers);
    res.status(200).json(mockResponse);
    res.end();
  },
  selfHandleResponse: true,
});


const serviceProxy = proxy(proxyConfig);

module.exports = (app) => {

  app.get(['/login'], (req, res, next) => {
    if (req.url === '/login') {
      res.redirect('/login/');
    } else {
      next();
    }
  });

  app.use(['/login/*'], serviceProxy);

  // We intercept the response from the server for this endpoint.
  // This is so that we get redirected back to localhost once login is successful.
  app.get('/login-be/api/v1/init*', loginProxy);

  // We don't care about the rest of the "login-be" calls
  app.all('/login-be/*', serviceProxy);


  // app.get('/login', (req, res) => res.redirect('/login/'));
  app.all(['/logout/*', '/preference-center/*'], (req, res, next) => {
    serviceProxy(req, res, next);
  });

  if (process.env.USE_logibox !== 'true') {
    // peasant hack to show the proxy url
    logBox(0); // show during "Starting the development server"
    logBox(20000); // show after 20 seconds (hopefully, after it compiles successfully)
  }
};
