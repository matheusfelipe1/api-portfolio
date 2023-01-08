import { EmailModel } from "./email.model";
import { Enviroments } from "../../../enviroments";
const nodemailer = require("nodemailer");
export class SendEmailService {


    async post(data: EmailModel) {
        console.log(data)
        const mailOptions = {
            from: Enviroments.DATA_EMAIL.auth.user,
            to: [Enviroments.DATA_EMAIL.auth.user, data.email],
            subject: Enviroments.data.subject,
            html: data.text
        };

        const transporter = await nodemailer.createTransport(Enviroments.DATA_EMAIL);

        // await transporter.sendMail(mailOptions);
        const info = await transporter.sendMail(mailOptions);
        console.log("Mailer Info: ", info);
        return info;
    }
}