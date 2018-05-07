import { Request, Router } from 'express';
// import * as multer from 'multer';
import { RegisterController } from '../controllers/registerController';

export class AppRouter {
    public router: Router;
    private registerController: RegisterController;

    constructor() {
        this.registerController = new RegisterController();
        this.router = Router();
        this.init();
    }

    public getRouter() {
        return this.router;
    }

    private init() {
        console.log('init called appRoutes');
        this.router.post('/register', this.registerController.registration);
    }

}
