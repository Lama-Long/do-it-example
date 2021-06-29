const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();
const apiserver = require('./apiserver');

exports.apiserver = functions.https.onRequest(apiserver);
exports.next = functions.https.onRequest((request, response) => {
  return app.prepare().then(() => handle(request, response));
});
