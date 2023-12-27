import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email inválido, formato correto é 'exemplo@email.com'"),
  senha: z
    .string()
    .min(8, "Senha deve conter pelo menos 8 dígitos")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
      "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um caractere especial."
    ),
});