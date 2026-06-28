import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { db } from "../../../../db/drizzle";
import { users } from "../../../../db/schema";
import { loginSchema, registerSchema } from "../schema";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema),
    async (c) => {
      const { email, password } = c.req.valid("json");

      console.log({ email, password })

      return c.json({ email, password });
    }
  )
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
