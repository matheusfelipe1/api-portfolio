import { Application, Request, Response } from 'express';
import * as cors from 'cors';
import { SendEmailController } from '../modules/email/email.controller';

export class SendEmailRouter {

    private controller: SendEmailController = new SendEmailController();

    public router(app: Application) {

        app.options('/v1/sendEmailV1');
        app.post('/v1/sendEmailV1', cors(), (req: Request, res: Response) => {
            this.controller.post(req, res);
        });
    }
}