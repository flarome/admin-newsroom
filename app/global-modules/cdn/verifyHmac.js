const path = require('path');
const crypto = require ('crypto');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });
require('dotenv').config();


const secret = process.env.WEBHOOK_SIGNATURE; // Clé secrète
const verifyHmac = (req) => {
    const hmacHeader = req.get('X-Shopify-Hmac-SHA256');
    const body = req.rawBody; // corps brut
    const hash = crypto
      .createHmac('sha256', secret)
      .update(body, 'utf8')
      .digest('base64');
      
    return hash === hmacHeader;
  };

  module.exports = { verifyHmac };