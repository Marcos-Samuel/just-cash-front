import { z } from 'zod';
import { capitalizeWords } from './registerSchema';

const formatPhoneNumber = (number: string): string => {
  
  const cleaned = number.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned[2]} ${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  }

  return cleaned;
};


export const leadSchema = z.object({
  name: z.string() .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .regex(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/, 'O campo nome deve conter pelo menos nome e sobrenome')
    .transform(value => capitalizeWords(value)),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  phone: z.string().min(11, 'Telefone é obrigatório').max(11, 'Telefone deve ter no maximo 11 caractes').regex(/^\d+$/, 'Telefone deve conter apenas números').transform(value => formatPhoneNumber(value)),
  opportunities: z.array(z.string()).optional()
});
