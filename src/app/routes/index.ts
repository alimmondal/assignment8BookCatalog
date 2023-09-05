import express from 'express';
import { BookRoutes } from '../modules/book/book.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { ReviewRatingRoutes } from '../modules/reviewRating/reviewRating.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes

  {
    path: '/auth/signup',
    route: UserRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },

  {
    path: '/categories',
    route: categoryRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRatingRoutes,
  },
  // {
  //   path: '/semester-registration',
  //   route: semesterRegistrationRoutes
  // }, {
  //   path: '/offered-courses',
  //   route: offeredCourseRoutes
  // },
  // {
  //   path: '/offered-course-sections',
  //   route: offeredCourseSectionRoutes
  // },
  // {
  //   path: '/offered-course-class-schedules',
  //   route: offeredCourseClassScheduleRoutes
  // }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
