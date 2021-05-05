import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
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
  const bearerHeader = req.headers['authorization'];
  
  if (!bearerHeader) {
    return next();
  }

  try {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.user = payload;
    console.log('Payload', payload)
  } catch (err) {}

  next();
};
