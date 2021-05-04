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
  authorization: any
}

export const currentUser = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  // if (!req.jwt) {
  //   return next();
  // }

  try {
    console.log(req.authorization)
    const payload = jwt.verify(
      req.authorization,
      process.env.JWT_KEY!
    ) as UserPayload;
    console.log('Payload', payload)
  } catch (err) {}

  next();
};
