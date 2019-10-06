const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/api/form", (req, res) =>{
    console.log("body: ", req.body);
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h1>Contact Email</h1>
            <ul>
              <li>name: ${req.body.name}</li>
              <li>email: ${req.body.email}</li>
              </ul>
              <h2>messae</h2>
              <p>message: ${req.body.message}</p>
        `
    })
 })
 
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Listening on port', PORT))