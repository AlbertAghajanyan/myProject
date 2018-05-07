import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
// import { APP_RESPONSES } from '../appResponse';
import { db } from './database';

// import { serverLogger } from "../utils/logger";

export class Register {
    constructor() {
        // empty
    }

    public registration(req: Request, res: Response) {
        console.log('registration called model')
        db.any('insert into users(name, email, password) values(\'Admin\',\'admin@gmail.com\', \'3ca6ada1-90f3-54a6-85f0-0696a9974fc0\')')
        .then((data) => {
            console.log('registration succes')
        })
        .catch ((error) => {
            console.log('registration failed')
        })
    }
}
