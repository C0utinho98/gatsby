import bodyParser from 'body-parser';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(bodyParser.urlencoded());
const contactAddress = 'hey@yourwebsite.com';
const mailer = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'emerson.coutinho@gmail.com',
    pass: '08101998',
  },
});
app.post('/contact', function (req, res) {
  console.log('aaaa');
  mailer.sendMail(
    {
      from: 'emerson.pires08@hotmail.com',
      to: [contactAddress],
      subject: req.body.subject || '[No subject]',
      html: req.body.message || '[No message]',
    },
    function (err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});
app.listen(3000);
