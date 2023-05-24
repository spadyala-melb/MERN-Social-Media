import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/images",
    createProxyMiddleware({
      target: "http://localhost:4000", // Replace with your Node.js server URL
      changeOrigin: true,
    })
  );
};
