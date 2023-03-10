import { NextFunction, Request, Response } from "express";

import { AnySchema } from "joi";

export const validateBody = (schema: AnySchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    next();
  };
};
