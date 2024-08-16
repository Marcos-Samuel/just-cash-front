import { z } from 'zod';
import { capitalizeWords } from './registerSchema';

export const leadSchema = z.object({
  name: z.string() .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .regex(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/, 'O campo nome deve conter pelo menos nome e sobrenome')
    .transform(value => capitalizeWords(value)),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  opportunities: z.array(z.string()).optional()
});
