const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config({ path: './.env' });

const {CLIENT_ID} = process.env;
const {CLIENT_SECRET} = process.env;
const {REDIRECT_URI} = process.env;
const {REFRESH_TOKEN} = process.env;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
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

    const mailOptions = {
      from: 'Thank You Tool <thankyoutooll@gmail.com>',
      to: 'simneyzi@gmail.com',
      subject: 'Hello from Gmail API',
      text: 'Helooow from Gmail API haha',
      html: '<h1>Helooow from Gmail API haha</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail().then((result) => console.log('email is sent', result))
  .catch((error) => { console.log(error.message); });
