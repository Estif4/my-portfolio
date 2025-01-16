const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "estifk2@gmail.com",
        pass: "jybo tsmu rvex upcz",
    },
});

app.post('/send-email', (req, res) => {
    const data = req.body;

    const mailOptions = {
        from: data.email,
        to: "estifanosk3@gmail.com",
        subject: data.subject,
        text: data.message,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #444; text-align: center; margin-bottom: 20px;">📧 New Message from Your Website</h2>
                <p><strong>Sender's Name:</strong> ${data.name}</p>
                <p><strong>Email Address:</strong> <a href="mailto:${data.email}" style="color: #1a73e8;">${data.email}</a></p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="margin-bottom: 10px;">${data.message}</p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="font-size: 14px; color: #555; text-align: center;">This message was sent from the contact form on your website. Reply directly to this email to get in touch with the sender.</p>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred while sending email:', error);
            res.status(500).send({ message: "Error occurred while sending your message. Please try again later." });
        } else {
            console.log('Email sent successfully: ' + info.response);
            res.status(200).send({ message: "Your message was sent successfully!" });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
