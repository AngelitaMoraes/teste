const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-email', (req, res) => {
  const { email, nome } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'SMTP',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'abdigitalegestao@gmail.com',
      pass: 'Helena1956!',
    },
  });

  const mailOptions = {
    from: 'abdigitalegestao@gmail.com',
    to: email,
    subject: 'Confirmação de pré-inscrição',
    text: `Olá ${nome}, obrigado por se inscrever no workshop de Macramê!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Ocorreu um erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.send('E-mail enviado com sucesso!');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});