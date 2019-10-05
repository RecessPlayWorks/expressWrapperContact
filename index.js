const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/api/form", (req, res) =>{
    console.log("body: ", req.body);
 })
 
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Listening on port', PORT))