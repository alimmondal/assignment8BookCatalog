import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  //   validateRequest(UserValidation.create),
  AuthController.signup
);
router.post(
  '/signin',
  //   validateRequest(UserValidation.create),
  AuthController.signin
);

export const AuthRoutes = router;
