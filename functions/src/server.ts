import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { SendEmailRouter } from "./routes/sendemail.routes";
import { CommonRoutes } from "./routes/common.routes";

export class Server {
    public app: express.Application;
    private email: SendEmailRouter = new SendEmailRouter();
    private common: CommonRoutes = new CommonRoutes();

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(bodyParser.json({
        limit: '300mb'
        }));
        
        this.app.use(bodyParser.urlencoded({
        limit: '300mb',
        parameterLimit: 200000,
        extended: true 
        }));
  
    }

    public routes() {
        this.email.router(this.app);
        this.common.route(this.app);
    }
}