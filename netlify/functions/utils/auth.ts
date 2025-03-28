import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import  env  from '../config/env';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('Access denied. No token provided.');
    }
    const decoded = verify(token, env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { authenticate };