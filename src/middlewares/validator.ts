import { Request, Response, NextFunction } from 'express';
//* Include all validators
import Validators from '../api/validation';
import { BadRequestException } from '../util/httpException';

export const validator = (validator: string) => {
  //! If validator does not exist, throw err
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const validated = await Validators[validator].validateAsync(req.body, {
        errors: {
          wrap: {
            label: '',
          },
        },
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (err: any) {
      const message =
        err?.message?.split('. ') ||
        'Invalid request data. Please review request and try again.';
      const exception = new BadRequestException(message);

      return next(exception);
    }
  };
};
