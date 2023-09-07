const mailer = require('./mailer');
require('dotenv').config();

const {inviteTravelmateEmail} = require('./emailTemplate');

const inviteTravelmateSendEmail =(user_name, receiver, subject) =>{
    const emailBody= inviteTravelmateEmail(user_name)
    const config =({
        from: process.env.SMTP_USER,
        to: receiver,
        subject:subject,
        text:emailBody
    })

    mailer
        .sendMail(config)
        .then(info =>{
            console.log(info);
        })
        .catch(err=>{
            console.log(err);
        })

    console.log(emailBody);
}


module.exports ={
    inviteTravelmateSendEmail,
}