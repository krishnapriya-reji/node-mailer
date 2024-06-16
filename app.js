require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail() {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email options
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'krishnapriya18claysys@gmail.com', 
        subject: 'Hello from Nodemailer',
        text: 'Hello! This is a test email sent using Nodemailer.'
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}

sendEmail();
