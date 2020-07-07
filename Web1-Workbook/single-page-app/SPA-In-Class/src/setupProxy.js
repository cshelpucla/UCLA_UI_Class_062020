const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const NODE_PORT = process.env.NODE_PORT || 5000; // fallback to 5000

console.log('NODE_PORT', NODE_PORT);

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://localhost:${NODE_PORT}`,
            changeOrigin: true
        })
    );
};