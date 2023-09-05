import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get(
  '/',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.getAllFromDB
);

router.get(
  '/:id',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.getByIdFromDB
);

router.post(
  '/',
  //   validateRequest(StudentValidation.create),
  UserController.insertIntoDB
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(StudentValidation.update),
  UserController.updateIntoDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.deleteFromDB
);

export const UserRoutes = router;
