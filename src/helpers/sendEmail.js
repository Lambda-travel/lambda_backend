const mailer = require('./mailer');
require('dotenv').config();
const {inviteTravelmateEmail} = require('./emailTemplate');
const {forgotPassEmail} = require('./forgotPassEmail')

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

const temporaryPasswordSendEmail =( receiver, subject, tempPassword)=>{
    const emailBody = forgotPassEmail(receiver,tempPassword)
    const config=({
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
            console.error(err);
        })
    console.log(emailBody);
}

module.exports ={
    inviteTravelmateSendEmail,
    temporaryPasswordSendEmail
    
}