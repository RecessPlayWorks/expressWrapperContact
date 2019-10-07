const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailConfig = require('./mailConfig');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/api/form", (req, res) => {
    console.log("body: ", req.body);
    
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h1>Contact Email</h1>
            <ul>
              <li>name: ${req.body.name}</li>
              <li>email: ${req.body.email}</li>
              </ul>
              <h2>message</h2>
              <h3>message: ${req.body.message}</h3>
        `
/* GMAIL */
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: mailConfig.emailAddress,
                pass: mailConfig.pass
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: mailConfig.emailAddress,
            replyTo: req.body.email,
            subject: 'Site Form Submission',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info)=>{
            if(err) {
                return console.log("email error: ", err);
            }
            console.log("INFO: ", info)
            console.log("message sent!", info.messageId );
        })
    })
    
    res.on('error', function(err) {
        console.log('ERROR', err);
    });
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Listening on port', PORT))

