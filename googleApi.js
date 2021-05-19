const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config({ path: './.env' });

// const CLIENT_ID = '619387599818-c83lga0gkep69hseje689ipnsh482qh4.apps.googleusercontent.com';
// const CLIENT_SECRET = '2LUxPaWKKF3ygzveDv5jGsJ6';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN = '1//04V250JfG2PF9CgYIARAAGAQSNwF-L9IragnOjilylyYZCvGgzh7kNCuzw8t_iYRGMYUFD8lIZNGHOcYsd5vVyp2f4PjuB_H__WE';


const {CLIENT_ID} = process.env
const {CLIENT_SECRET} = process.env
const {REDIRECT_URI} = process.env
const {REFRESH_TOKEN} = process.env

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
