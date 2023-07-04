import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../app/interfaces/error';
import { IGenericErrorResponse } from '../app/interfaces/common';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 500;
  const message = error.errors.reduce(
    (pre, cur) => pre + ' ' + cur.message,
    ''
  );
  return {
    statusCode,
    message: message,
    errorMessages: errors,
  };
};

export { handleZodError };
