const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sendMail = require('./googleApi.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


app.post('/', (req, res) => {

  console.log(req.body);

  const mailOptions = {
    from: 'Thank You Tool <thankyoutooll@gmail.com>',
    to: 'simneyzi@gmail.com',
    subject: 'You received a Thank You',
    text: `Hi ${req.body.name}! ${req.body.sender} sent you a thank you to show their appreciation.
          Here is your message: ${req.body.textInput}
          Keep up the good work!`,
    html: `<h1> Hi ${req.body.name}! ${req.body.sender} sent you a thank you to show their appreciation.
    Here is your message: ${req.body.textInput}
    Keep up the good work! </h1>`,
  };

  sendMail(mailOptions)
    .then((result) => {
      console.log('email is sent', result);
      res.status(201).send();
    })
    .catch((error) => {
      //console.log('email error: ', error.message);
      res.status(400).send(error);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
