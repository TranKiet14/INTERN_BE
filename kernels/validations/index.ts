import { NextFunction, Request, Response } from "express";
import { ExpressValidator } from "express-validator";
import response from "utils/responseUtils";

const { validationResult } = new ExpressValidator(
  {},
  {},
  {
    errorFormatter: (error: any) => ({
      field: error.path,
      message: error.msg,
    }),
  }
);

export const validate = (validationArray: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validationArray) {
      for (let _validation of validation) {
        await _validation.get().run(req);
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    }
    else {
      response.invalidated(res, {
        errors: errors.array(),
      });
    }
  };
};

