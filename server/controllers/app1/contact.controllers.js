const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const { readFileSync } = require('fs');
const ejs = require('ejs');
const { join } = require('path');
const CLIEND_ID = "114080840458-ubhqmpr61aiulkadeelia0kov8verdg3.apps.googleusercontent.com"
const CLIEND_SECRET= "GR9g_DMiQoBxELd4evrjYY8_"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04fW4xRfw85awCgYIARAAGAQSNwF-L9Ir7UhkEQcYnSpyTGgIBS30UrtANZ1Cvt1bRsIPB94t08c6tgE-fGaqYcga8302iRN0sWY";
const oAuth2Client = new google.auth.OAuth2(CLIEND_ID, CLIEND_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})



module.exports = {
    postMessage: async (req, res, next)=>{
        try {
            const body = req.body;
            const accessToken = await oAuth2Client.getAccessToken()
            const tranporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAUTH2',
                    user: 'raphaelandrey99@gmail.com',
                    clientId: CLIEND_ID,
                    clientSecret: CLIEND_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            const mailOption = {
                    from: '🌴<raphaelandrey99@gmail.com>',
                    to: 'raphaelandrey@outlook.fr',
                    subject: 'Un message de Tacosnack.site',
                    html: `<p>De: ${body.name} ${body.firstname}</p>
                    <p> ${body.message}</p>
                    reply to: ${body.email}`
            }
            const result = await tranporter.sendMail(mailOption)
            res.json({
                status: 200,
                reult: result
            })
        } catch (error) {
            next(error)
        }
    },
    sendWelcomeEmail: async (body, res) =>{
        try {
            const accessToken = await oAuth2Client.getAccessToken()
            const tranporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAUTH2',
                    user: 'raphaelandrey99@gmail.com',
                    clientId: CLIEND_ID,
                    clientSecret: CLIEND_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            const file = readFileSync(join(__dirname,'../../templates/welcome.ejs'));
            const template = ejs.render(file.toString(), {firstname: body.firstname, link: body.link});
            console.log(template);
            const mailOption = {
                    from: '🌴<raphaelandrey99@gmail.com>',
                    to: body.email,
                    subject: 'Bienvenue sur TacoSnack',
                    html: template
            }
            const result = await tranporter.sendMail(mailOption)
            console.log(result);
        } catch (error) {
           console.log(error);
        }
    }
}