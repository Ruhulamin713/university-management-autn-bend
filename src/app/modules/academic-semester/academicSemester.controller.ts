import { NextFunction, Request, Response } from 'express';
import { createSemester, getAllSemesters } from './academicSemester.service';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../share/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../share/pick';
import { pagination } from '../../../constants/pagination';

const createAcademicSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result = await createSemester(academicSemesterData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester Created Successfully',
      data: result,
    });
    next();
  }
);

const getSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, pagination);

    const result = await getAllSemesters(paginationOptions);

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Semester ',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export { createAcademicSemesterController, getSemesters };
