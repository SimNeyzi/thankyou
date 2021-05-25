const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models.js');
const sendMail = require('./googleApi.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/', (req, res, next) => {
  const params = [req.body.textInput, req.body.sender, req.body.receiver];
  models.addThankYou(params);
  next();
}, (req, res) => {
  const mailOptions = {
    from: 'Thank You Tool <thankyoutooll@gmail.com>',
    to: 'simneyzi@gmail.com',
    subject: 'You received a Thank You',
    text: `Hi ${req.body.receiver}! ${req.body.sender} sent you a thank you to show their appreciation.
          Here is your message: ${req.body.textInput}
          Keep up the good work!`,
    html: `<h1> Hi ${req.body.receiver}! ${req.body.sender} sent you a thank you to show their appreciation.
    Here is your message: ${req.body.textInput}
    Keep up the good work! </h1>`,
  };

  sendMail(mailOptions)
    .then((result) => {
      console.log('email is sent', result);
      res.status(201).send();
    })
    .catch((error) => {
      // console.log('email error: ', error.message);
      res.status(400).send(error);
    });
});

app.get('/mythankyous', (req, res) => {
  models.getThankYous((err, results) => {
    //console.log('function: ', models.getThankYous)
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
