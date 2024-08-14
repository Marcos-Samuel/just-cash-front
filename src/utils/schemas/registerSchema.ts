import { z } from 'zod';

const capitalizeWords = (str: string) =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

export const registerSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .regex(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/, 'Nome deve conter pelo menos um nome e um sobrenome, separados por um espaço')
    .transform(value => capitalizeWords(value)),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/(?=.*[a-zA-Z])/, 'Senha deve conter pelo menos uma letra')
    .regex(/(?=.*\d)/, 'Senha deve conter pelo menos um número')
    .regex(/(?=.*[@$!%*?&])/, 'Senha deve conter pelo menos um caractere especial'),
  confirmPassword: z.string()
    .nonempty('Confirmação de senha é obrigatória')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
});
