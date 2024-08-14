import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});
