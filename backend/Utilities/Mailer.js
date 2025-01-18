const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or your preferred email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Talk It Out',
    text: `Hi ${name},\n\nWelcome to Talk It Out! We're excited to have you on board.\n\nCheers,\nThe Team`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendWelcomeEmail;
