const { Queue, Worker } = require('bullmq');
const sendWelcomeEmail = require('./Utilities/Mailer'); // Import your email utility

// Redis connection options
const connection = {
  host: '127.0.0.1', // Default Redis host
  port: 6379,        // Default Redis port
};

// Initialize the queue
const emailQueue = new Queue('emailQueue', { connection });

// Worker to process jobs
new Worker(
  'emailQueue',
  async (job) => {
    const { email, name } = job.data;
    await sendWelcomeEmail(email, name); // Call your email utility function
  },
  { connection }
);

module.exports = emailQueue;
