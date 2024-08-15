import { getItem, setItem, KEYS } from './storageService';
import { IFormLead } from '../utils/interface';
import { generateRandomIdAndToken } from './user';

export interface IFormLeadWithStatus extends IFormLead {
  id: string;
  status: string;
}

export const registerLead = async (data: Omit<IFormLeadWithStatus, 'id' | 'status'>): Promise<{ success: boolean, lead?: IFormLeadWithStatus, message?: string }> => {
  const leads: IFormLeadWithStatus[] = await getItem<IFormLeadWithStatus>(KEYS.LEADS);

  const emailExists = leads.some(lead => lead.email === data.email);
  if (emailExists) {
    return { success: false, message: 'E-mail já cadastrado' };
  }

  const leadId = generateRandomIdAndToken();
  const newLead: IFormLeadWithStatus = { id: leadId, ...data, status: 'potential' };

  leads.push(newLead);

  await setItem(KEYS.LEADS, leads);

  return { success: true, lead: newLead };
};

export const getLeads = async (): Promise<Record<string, IFormLeadWithStatus[]>> => {
  const leads: IFormLeadWithStatus[] = await getItem<IFormLeadWithStatus>(KEYS.LEADS);

  const categorizedLeads: Record<string, IFormLeadWithStatus[]> = {
    'Cliente-Potencial': [],
    'Dados-Confirmados': [],
    'Analise-Lead': []
  };

  leads.forEach(lead => {
    if (lead.status === 'potential') {
      categorizedLeads['Cliente-Potencial'].push(lead);
    } else if (lead.status === 'confirmed') {
      categorizedLeads['Dados-Confirmados'].push(lead);
    } else if (lead.status === 'pending') {
      categorizedLeads['Analise-Lead'].push(lead);
    }
  });

  return categorizedLeads;
};
