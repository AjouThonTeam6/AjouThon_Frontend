const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/auth", {
      target: "https://mhaksa.ajou.ac.kr:30443",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/sso", {
      target: "https://sso.ajou.ac.kr",
      changeOrigin: true,
    })
  );
};
