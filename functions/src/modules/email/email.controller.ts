import { Request, Response } from 'express';
import { insufficientParameters, successResponse, failureResponse  } from '../common/common.service'
import { EmailModel } from './email.model';
import { SendEmailService } from './email.service';

export class SendEmailController {

    private service: SendEmailService = new SendEmailService();

    public post(req: Request, res: Response) {
        if (req.body && req.body.name && req.body.text && req.body.email) {
            const data: EmailModel = req.body;
            this.service.post(data).then((result: any) => {
                successResponse('E-mail enviado com sucesso!', req.body, res)
            }).catch((err: any) => {
                failureResponse('Erro ao enviar email', err, res)
            })
        } else {
            insufficientParameters(res, 'One or more params insufficient')
        }
    }
}