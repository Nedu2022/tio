const { Worker } = require('bullmq');
const nodemailer = require('nodemailer');
const Redis = require('ioredis');

const connection = new Redis({
  host: '127.0.0.1',
  port: 6379,
});

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,   // Your email
    pass: process.env.EMAIL_PASS,   // Your email password or app password
  },
});

const emailWorker = new Worker(
  'emailQueue',
  async (job) => {
    const { email, name } = job.data;
    console.log(`Processing email for: ${email}`);

    const mailOptions = {
      from: '"Talk It Out" <your-email@gmail.com>',
      to: email,
      subject: 'Welcome to Talk It Out!',
      html: `<p>Hi ${name},</p><p>Thank you for registering at Talk It Out. We're excited to have you!</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${email}`);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },
  { connection }
);

console.log('Email Worker is running...');
