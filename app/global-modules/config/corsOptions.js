// Définir les options CORS
const corsOptions = {
    origin: [
      "http://www.flarome.com",
      "http://flarome.com",
      "https://www.flarome.com",
      "https://flarome.com",
      "http://c82c3d-d9.myshopify.com",
      "https://c82c3d-d9.myshopify.com",
      "http://127.0.0.1:9292",
      "https://127.0.0.1:9292"
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Origin', 'Content-Type', 'Accept', 'Cache-Control', 'DNT', 'X-Requested-With', 'User-Agent', 'Keep-Alive', 'If-Modified-Since', 'Authorization', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Access-Control-Allow-Headers', 'modelversion', 'syntax', 'x-aos-model-page', 'x-aos-stk'],
    preflightContinue: false,
    credentials: true
  };
  
  module.exports = corsOptions;
  
