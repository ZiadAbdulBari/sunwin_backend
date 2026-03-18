import { prisma } from "../../config/db.js";
import { hashPassword, comparePassword } from "../../utils/hash.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.js";

export const registerUser = async (data: any) => {
  const { email, password, name } = data;

  const existing = await prisma.auth.findUnique({
    where: { email },
  });

  if (existing) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(password);

  const auth = await prisma.auth.create({
    data: {
      email,
      password: hashedPassword,
      profile: {
        create: {
          name,
        },
      },
    },
    include: {
      profile: true,
    },
  });

  return auth;
};

export const loginUser = async (data: any) => {
  const { email, password } = data;

  const user = await prisma.auth.findUnique({
    where: { email },
    include: { profile: true },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const payload = {
    userId: user.id,
    // role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // store refresh token in DB
  // await prisma.session.create({
  //   data: {
  //     authId: user.id,
  //     refreshToken,
  //     expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  //   },
  // });

  return {
    accessToken,
    refreshToken,
    user,
  };
};