const nodemailer = require('nodemailer')
const sgMail = require("@sendgrid/mail");
const sendGridTransport = sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export class MailService {
    constructor() {

    }
    static sendWelcome(message) {
        const transporter = nodemailer.createTransport(sendGridTransport);

        const messageBody = {
            ...message,
          from: "etienejames5@gmail.com"
        };

        transporter.sendMail(messageBody, (err, info) => {
          if (err) {
            console.log(err);
          }
          console.log("info =>", info.response);
        });
    }
}



import Mailservice from "mailserve";

const msg = {
    to: [],
    subject: "fdfdff",
    text: "gssa"
}

MailService.sendMail(message)


const mailer = new Mailservice()
mailer.sendMail(msg)
