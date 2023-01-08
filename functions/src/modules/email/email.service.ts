import { EmailModel } from "./email.model";
import { Enviroments } from "../../../enviroments";
const nodemailer = require("nodemailer");
export class SendEmailService {


    async post(data: EmailModel) {
        const mailOptions = {
            from: `${data.name} <${data.email}>`,
            to: Enviroments.DATA_EMAIL.auth.user,
            subject: Enviroments.data.subject,
            cc: data.email,
            html: `<p>${data.text}</p>
                <footer>
                    <p>${data.email}</p>
                </footer>
                `
        };

        const transporter = await nodemailer.createTransport(Enviroments.DATA_EMAIL);
        // await transporter.sendMail(mailOptions);
        const info = await transporter.sendMail(mailOptions);
        console.log("Mailer Info: ", info);
        return info;
    }
}