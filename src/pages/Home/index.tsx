import './style.css';
import Table from '../../components/Table';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import InputText from '../../components/InputText';
import { useForm, Controller } from 'react-hook-form';
import { IFormLead } from '../../utils/interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema } from '../../utils/schemas/LeadSchema';
import { registerLead, getLeads, IFormLeadWithStatus } from '../../services/lead';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SuccessMessage from '../../components/SuccessMessage';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<IFormLead | null>(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const { register, handleSubmit, control, setError, reset, setValue, formState: { errors } } = useForm<IFormLead>({
    resolver: zodResolver(leadSchema),
  });
  const openModal = async (leadId: string) => {
    if (leadId) {
      const leadsData = await getLeads();
      const lead = Object.values(leadsData).flat().find((l): l is IFormLeadWithStatus => l.id === leadId);
      setSelectedLead(lead || null);
      setIsFormDisabled(true);
    }
  
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setSelectedLead(null);
    setIsModalOpen(false);
    reset();
  };
  
  const onSubmit = async (data: IFormLead) => {
    try {
      const lead = await registerLead(data);
      if (!lead.success) {
        setError('email', {
          type: 'manual',
          message: lead.message
        });
        return;
      }
      reset();
      setSuccessMessage('Lead cadastrado com sucesso!'); 
      setTimeout(() => {
        setSuccessMessage(null); 
        closeModal();
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (selectedLead) {
      setValue('name', selectedLead.name);
      setValue('email', selectedLead.email);
      setValue('phone', selectedLead.phone);
      setValue('opportunities', selectedLead.opportunities || []);
    } else {
      setIsFormDisabled(false);
    }
  }, [selectedLead, setValue]);

  return (
    <div className='conteiner-main'>
      <Header variable='secondary' isLogout />
      <main>
        <div className='content-table'>
          <div className='content-button'>
            <Button variable='alternateButton' onClick={() => openModal('')}>
              + Novo Lead
            </Button>
          </div>
          <Table isModalOpen={isModalOpen} onRowClick={openModal} />
        </div>
        <Modal title={isFormDisabled ? 'Lead' : 'Novo Lead' } isOpen={isModalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText
              type='text'
              label='Nome Completo'
              {...register('name')}
              error={errors.name}
              disabled={isFormDisabled}
            />
            <InputText
              type='text'
              label='Email'
              {...register('email')}
              error={errors.email}
              disabled={isFormDisabled}
            />
            <InputText
              type='text'
              label='Telefone'
              {...register('phone')}
              error={errors.phone}
              disabled={isFormDisabled}
            />
            <div className='content-checkbox'>
              <h4>Oportunidades</h4>
              <Controller
                name='opportunities'
                control={control}
                defaultValue={[]}
                render={({ field }) => {
                  const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const isChecked = e.target.checked;
                    if (isChecked) {
                      field.onChange([
                        'Todos',
                        'Honorários Sucumbenciais',
                        'Honorários Contratuais',
                        'Honorários Dativos',
                        'Crédito do Autor'
                      ]);
                    } else {
                      field.onChange([]);
                    }
                  };

                  const handleIndividualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value;
                    const isChecked = e.target.checked;
                    const updatedValues = isChecked
                      ? [...field.value, value]
                      : field.value.filter(v => v !== value);

                    if (value === 'Todos') {
                      field.onChange(isChecked
                        ? [
                          'Todos',
                          'Honorários Sucumbenciais',
                          'Honorários Contratuais',
                          'Honorários Dativos',
                          'Crédito do Autor'
                        ]
                        : []);
                    } else {
                      if (updatedValues.includes('Todos')) {
                        field.onChange(updatedValues);
                      } else {
                        field.onChange([
                          ...(updatedValues.includes('Todos') ? [] : field.value.filter(v => v !== 'Todos')),
                          ...updatedValues
                        ]);
                      }
                    }
                  };

                  return (
                    <>
                      <label>
                        <input
                          type="checkbox"
                          value="Todos"
                          onChange={handleAllChange}
                          checked={field.value.length === 5}
                          disabled={isFormDisabled}
                        />
                        Todos
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Honorários Sucumbenciais"
                          onChange={handleIndividualChange}
                          checked={field.value.includes('Honorários Sucumbenciais')}
                          disabled={isFormDisabled}
                        />
                        Honorários Sucumbenciais
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Honorários Contratuais"
                          onChange={handleIndividualChange}
                          checked={field.value.includes('Honorários Contratuais')}
                          disabled={isFormDisabled}
                        />
                        Honorários Contratuais
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Honorários Dativos"
                          onChange={handleIndividualChange}
                          checked={field.value.includes('Honorários Dativos')}
                          disabled={isFormDisabled}
                        />
                        Honorários Dativos
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Crédito do Autor"
                          onChange={handleIndividualChange}
                          checked={field.value.includes('Crédito do Autor')}
                          disabled={isFormDisabled}
                        />
                        Crédito do Autor
                      </label>
                    </>
                  );
                }}
              />
              <div className='content-buttons'>
                <Button variable='alternateButton' type="submit" disabled={isFormDisabled}>Salvar</Button>
                <Button variable='secondaryButton' type="button" onClick={closeModal}>Cancelar</Button>
              </div>
            </div>
          </form>
        </Modal>
        {successMessage && (
          <SuccessMessage
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}
      </main>
      <div>
        <Footer variable='secondary'/>
      </div>
    </div>
  );
};

export default Home;
