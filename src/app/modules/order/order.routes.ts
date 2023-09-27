import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.get(
  '/',
  // auth(ENUM_USER_ROLE.CUSTOMER),
  auth(ENUM_USER_ROLE.ADMIN),
  OrderController.getAllFromDB
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.CUSTOMER),
  // auth(ENUM_USER_ROLE.ADMIN),
  OrderController.getByIdFromDB
);

router.post(
  '/create-order',
  // validateRequest(OrderValidation.create),
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.insertIntoDB
);

export const OrderRoutes = router;
