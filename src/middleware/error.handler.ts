import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  _err: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  return _res.status(500).json({
    errors: [
      {
        message: " Something went wrong",
        error: _err,
      },
    ],
  });
};
