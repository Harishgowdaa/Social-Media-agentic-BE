import Router from 'express';
const router = Router();
import userController from './user.controller.js';


router.get('/social-login', userController.socialLogin);
router.post('/google-callback', userController.googleCallback);

export default router;
