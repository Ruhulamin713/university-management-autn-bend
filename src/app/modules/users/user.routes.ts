import express from 'express';
import { userController } from './user.controller';
import { validateREquest } from '../../middleware/validationRequest';
import { createUserZodSchema } from './user.validation';

const userRoute = express.Router();

userRoute.post(
  '/create-user',
  validateREquest(createUserZodSchema),
  userController.createUser
);
export default userRoute;
