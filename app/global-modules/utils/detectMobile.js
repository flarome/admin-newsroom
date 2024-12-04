const isMobile = require('is-mobile');

function detectMobile(req, res, next) {
  req.isMobile = isMobile({ ua: req.headers['user-agent'] });
  next();
}

module.exports = detectMobile;
