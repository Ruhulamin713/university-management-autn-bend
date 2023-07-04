import express from 'express';
import { validateREquest } from '../../middleware/validationRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import {
  createAcademicSemesterController,
  getSemesters,
} from './academicSemester.controller';

const semesterRoute = express.Router();

semesterRoute.post(
  '/create-semester',
  validateREquest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  createAcademicSemesterController
);
semesterRoute.get('/', getSemesters);

export { semesterRoute };
