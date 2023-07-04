import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesters,
} from './academic.Semester.constant';

// validate user input with zod
const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesters] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({ required_error: 'Year is required' }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is required',
    }),
  }),
});

export const AcademicSemesterValidation = { createAcademicSemesterZodSchema };
