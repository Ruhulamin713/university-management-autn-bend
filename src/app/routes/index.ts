import express from 'express';
import userRoute from '../modules/users/user.routes';
import { semesterRoute } from '../modules/academic-semester/academicSemester.route';
const routes = express.Router();

const moduleRoutes = [
  { path: '/user', route: userRoute },
  {
    path: '/academic-semester',
    route: semesterRoute,
  },
];

// routes.use('/user', userRoute);
// routes.use('/academic-semester', semesterRoute);

moduleRoutes.forEach(route => routes.use(route.path, route.route));

export default routes;
