import { compare, hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { deleteCookie, setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";

import { db } from "../../../../db/drizzle";
import { users } from "../../../../db/schema";
import { loginSchema, registerSchema } from "../schema";
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  signSessionToken,
} from "./session";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema),
    async (c) => {
      const { email, password } = c.req.valid("json");
      const normalizedEmail = email.toLowerCase();

      const [user] = await db
        .select({
          id: users.id,
          name: users.name,
          email: users.email,
          passwordHash: users.passwordHash,
        })
        .from(users)
        .where(eq(users.email, normalizedEmail))
        .limit(1);

      if (!user) {
        return c.json({ error: "Credenciais invalidas." }, 401);
      }

      const isValidPassword = await compare(password, user.passwordHash);

      if (!isValidPassword) {
        return c.json({ error: "Credenciais invalidas." }, 401);
      }

      const token = await signSessionToken({
        userId: user.id,
        email: user.email,
        name: user.name,
      });

      setCookie(c, SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        maxAge: SESSION_MAX_AGE,
        path: "/",
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      });

      return c.json({
        user: {
          name: user.name,
          email: user.email,
        },
      });
    }
  )
  .post("/logout", async (c) => {
    deleteCookie(c, SESSION_COOKIE_NAME, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });

    return c.json({ success: true });
  })
  .post(
    "/register",
    zValidator("json", registerSchema),
    async (c) => {
      const { name, email, password } = c.req.valid("json");
      const normalizedEmail = email.toLowerCase();

      const [existingUser] = await db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.email, normalizedEmail))
        .limit(1);

      if (existingUser) {
        return c.json({ error: "E-mail ja cadastrado." }, 409);
      }

      const passwordHash = await hash(password, 12);

      const [user] = await db
        .insert(users)
        .values({
          name,
          email: normalizedEmail,
          passwordHash,
        })
        .returning({
          id: users.id,
          name: users.name,
          email: users.email,
          createdAt: users.createdAt,
        });

      return c.json({ user }, 201);
    }
  )

export default app;
