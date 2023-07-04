import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../share/sendResponse';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    const result = await userService.createUser(user);

    // res.status(200).json({
    //   success: true,
    //   message: 'User created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });

    next();
  }
);
export const userController = { createUser };
