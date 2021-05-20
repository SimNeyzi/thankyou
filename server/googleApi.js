const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config({ path: '../.env' });

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = require('../config.js');

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mailOptions) {
  const accessToken = await oAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'thankyoutooll@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken,
    },
  });

  const result = await transport.sendMail(mailOptions);
  return result;
}

module.exports = sendMail;
