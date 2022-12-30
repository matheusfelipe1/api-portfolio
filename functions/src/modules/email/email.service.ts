import { EmailModel } from "./email.model";

export class SendEmailService {

    async post(data: EmailModel) {
        return data;
    }
}