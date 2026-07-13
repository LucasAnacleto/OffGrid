import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Informe um e-mail valido."),
  password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres."),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome."),
  email: z.string().email("Informe um e-mail valido."),
  password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres."),
})