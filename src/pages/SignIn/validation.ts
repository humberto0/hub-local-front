import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .email({ message: "O email invalido" })
    .transform((value) => value.toLowerCase()),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
