const helmet = require('helmet');

// Définir la configuration de helmet
const helmetConfig = helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "*.flarome.com", "flarome.com", "www.flarome.com"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "data:"],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https:", "*.flarome.com", "flarome.com", "www.flarome.com", "'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    },
    frameguard: {
      action: "sameorigin", // Définir X-Frame-Options: SAMEORIGIN
    },
    dnsPrefetchControl: { allow: false }, // X-Dns-Prefetch-Control: off
    noSniff: true, // X-Content-Type-Options: nosniff
    ieNoOpen: true, // X-Download-Options: noopen
    referrerPolicy: { policy: "no-referrer" }, // Referrer-Policy: no-referrer
    permittedCrossDomainPolicies: { policy: "none" }, // X-Permitted-Cross-Domain-Policies: none
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }, // Définir Cross-Origin-Opener-Policy: same-origin-allow-popups
    crossOriginResourcePolicy: { policy: "cross-origin" }, // Définir Cross-Origin-Resource-Policy: cross-origin
  });

module.exports = helmetConfig;
