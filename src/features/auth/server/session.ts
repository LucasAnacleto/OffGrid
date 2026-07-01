import { jwtVerify, SignJWT } from "jose";

export const SESSION_COOKIE_NAME = "offgrid_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

type SessionTokenPayload = {
  userId: number;
  email: string;
  name: string;
};

const encoder = new TextEncoder();

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }

  return encoder.encode(secret);
};

export const signSessionToken = async (payload: SessionTokenPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Math.floor(Date.now() / 1000) + SESSION_MAX_AGE)
    .sign(getJwtSecret());
};

export const verifySessionToken = async (token: string) => {
  const { payload } = await jwtVerify(token, getJwtSecret());

  return {
    userId: Number(payload.userId),
    email: String(payload.email),
    name: String(payload.name),
  };
};
