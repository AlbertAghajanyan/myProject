import { NextFunction, Request, Response } from 'express';
import { Register } from './../models/registerModel';

const register = new Register();

export class RegisterController {
    constructor() {
        // empty
    }

    public registration(req: Request, res: Response, next: NextFunction) {
        console.log('registration called controller');
        register.registration(req, res);
    }
}
const registerController = new RegisterController();
export default registerController;
