require('dotenv').config()

const mailer = require('nodemailer')

const transporter = mailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    requireTLS:true,
    secure:true,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASSWORD,
    },
});


module.exports = transporter