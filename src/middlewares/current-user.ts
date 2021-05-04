import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

interface UserRequest extends Request {
  jwt: any
}

export const currentUser = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
  } catch (err) {}

  next();
};
