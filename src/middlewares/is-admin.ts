import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/bad-request-error';

interface UserRequest extends Request {
  user: {
    id: string;
    role: string;
  };
}

export const isAdmin = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== ('superadmin' || 'admin')) {
    throw new BadRequestError(
      'Only admins and superadmins have access to this route'
    );
  }

  next();
};
