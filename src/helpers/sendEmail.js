const mailer = require('./mailer');
require('dotenv').config();

const {inviteTravelmateEmail} = require('./emailTemplate');

const inviteTravelmateSendEmail =(receiver, subject) =>{
    const emailBody= inviteTravelmateEmail(receiver)
    // const config =({
    //     from: process.env.SMTP_USER,
    //     to: receiver,
    //     subject:subject,
    //     text:emailBody
    // })

    // mailer
    //     .sendMail(config)
    //     .then(info =>{
    //         console.log(info);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })

    console.log(emailBody);
}


module.exports ={
    inviteTravelmateSendEmail,
}