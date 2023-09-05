import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllFromDB);

router.get('/:id', BookController.getByIdFromDB);

router.post(
  '/create-book',
  // validateRequest(BookValidation.create),
  BookController.insertIntoDB
);

router.patch(
  '/:id',
  // validateRequest(BookValidation.update),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.deleteByIdFromDB
);

export const BookRoutes = router;
