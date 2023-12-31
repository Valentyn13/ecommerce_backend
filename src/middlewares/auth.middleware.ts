import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';

import User from '../models/userModel';
import { IUserRequest } from '../types/user.types';
import { CustomError } from './customError';

interface IToken {
  id: string
}

const protect = async (req: IUserRequest, res:Response, next:NextFunction) => {
  let token: string;
  try {
    token = req.cookies.jwt;

    if (!token) {
      throw new CustomError({
        name: 'NO_TOKEN',
        message: 'JWT token not found, please authorize',
        status: 401,
      });
    }

    const decoded = jwt.verify(token, 'SECRET') as IToken;
    const authorizedUser = await User.findById(decoded.id).select('-password');
    if (!authorizedUser) {
      throw new CustomError({
        name: 'INVALID_TOKEN',
        message: 'Cannot find user by JWT token',
        status: 401,
      });
    }
    req.body = authorizedUser;
    next();
  } catch (err) {
    next(err);
  }
};

export default protect;
