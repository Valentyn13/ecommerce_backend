import jwt from 'jsonwebtoken';

export const MAX_AGE = 1 * 24 * 60 * 60 

export const createToken = (id:string) => {
    return jwt.sign({id}, 'SECRET', {
        expiresIn: MAX_AGE // 1 day
    })
  }