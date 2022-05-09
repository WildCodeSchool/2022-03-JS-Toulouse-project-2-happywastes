const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (firstname, lastname, email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "happywastes@outlook.fr",
      pass: process.env.MAILLER_PASSWORD,
    },
  });

  const options = {
    from: "happywastes@outlook.fr",
    to: `${email}`,
    subject: "sending email teeeeeest",
    text: `Welcome ${firstname} ${lastname} to the Happy Wastes apply :)`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      return;
    }
    console.error(`sent message${info.response}`);
  });
};

sendMail("jimmy", "vogt", "vogt.jimmy18@gmail.com");

module.exports = sendMail;
