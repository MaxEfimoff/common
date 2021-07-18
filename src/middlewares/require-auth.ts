import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

interface UserRequest extends Request {
  user: {
    id: string;
  };
}

export const requireAuth = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new NotAuthorizedError();
  }

  next();
};
