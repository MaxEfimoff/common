import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/bad-request-error';

interface UserRequest extends Request {
  user: {
    id: string;
    role: string;
  };
}

export const isSuperadmin = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== 'superadmin') {
    throw new BadRequestError('Only superadmin has access to this route');
  }

  next();
};
