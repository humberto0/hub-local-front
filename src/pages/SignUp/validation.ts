/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export const signInFormSchema = z
  .object({
    name: z.string().regex(/^\w+\s+\w+$/, {
      message: "O nome deve conter nome e sobrenome.",
    }),
    email: z
      .string()
      .email({ message: "O email invalido" })
      .transform((value) => value.toLowerCase()),
    password: z
      .string()
      .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
      .regex(/(?=.*[a-z])/, {
        message: "A senha deve conter um carácter minusculo.",
      })
      .regex(/(?=.*[A-Z])/, {
        message: "A senha deve conter um carácter maiusculo.",
      })
      .regex(/(?=.*[0-9])/, { message: "A senha deve conter um numero." })
      .regex(/(?=.*[!@#\\$%\\^&\\*])/, {
        message: "A senha deve conter um carácter especial.",
      })
      .regex(/^(?=.{8,})/, {
        message: "A senha deve conter 8 caracteres.",
      }),
    confirmPassword: z.string().min(6, {
      message: "A senha deve conter no mínimo 6 caracteres.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais.",
    path: ["confirmPassword"],
  });
export type SignInFormSchema = z.infer<typeof signInFormSchema>;
