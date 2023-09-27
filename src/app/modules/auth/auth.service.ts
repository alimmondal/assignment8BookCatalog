/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient, User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { ILoginUser, ILoginUserResponse } from './auth.interface';

const prisma = new PrismaClient();

const signup = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const signin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  // Input validation
  if (!email || !password) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Email and password are required'
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  // Compare plaintext passwords directly
  if (password !== user.password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // Create access token
  const accessToken = jwtHelpers.createToken(
    {
      userId: user.id,
      role: user.role,
      // You can include additional user data in the token if needed
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const response: ILoginUserResponse = {
    role: user.role,
    userId: user.id,
    accessToken,

    // Add other properties you want to include in the response
  };

  return response;
};

// Utility function to compare passwords
// async function comparePasswords(inputPassword: string, hashedPassword: string) {
// Implement password comparison logic here (e.g., using bcrypt)
// Return true if the passwords match, false otherwise
// }

export const AuthService = {
  signup,
  signin,
};
