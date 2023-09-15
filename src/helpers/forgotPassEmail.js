const forgotPassEmail=(email, temporaryPassword)=>{
    return `
    Hello ${email}
    
    A new password has been requested by this email: 
    ${email}

    This is your temporary password: ${temporaryPassword}

    For security reasons, please change your temporary password after logging in.

    And always remember, 
    
    “Live life with no excuses, travel with no regret.”

    Thanks!
    LAMBDA Team
    `
}

module.exports={
    forgotPassEmail
}