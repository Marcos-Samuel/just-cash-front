import { SubmitHandler, useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import { IFormRegister } from '../../utils/interface';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo/logoHeader';
import Button from '../../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../utils/schemas/registerSchema';
import { registerUser } from '../../services/user';
import SuccessMessage from '../../components/SuccessMessage';
import { useState } from 'react';

const SignUp: React.FC = () => {

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { register, handleSubmit, reset, setError , formState: { errors } } = useForm<IFormRegister>({
    resolver: zodResolver(registerSchema)
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormRegister> = async (data) => {
    try {
      const user = await registerUser(data);
      if (!user.success) {
        setError('email', {
          type: 'manual',
          message: user.message
        });
        return;
      }
      reset();
      setSuccessMessage('Cadastro realizado com sucesso!'); 
      setTimeout(() => {
        setSuccessMessage(null); 
        navigate('/');
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className='conteiner-signup' >
      <Header variable='primary' />
      <main className='content-main-signup'>
        
        <div className='conteiner-backgroud'>
          <h1>Cadastro de Responsável pela Manutenção de Leads</h1>
          <p>
            Mantenha seus potenciais clientes organizados e
            gerencie o relacionamento com eficiência.
            Cadastre novos leads e acompanhe o progresso de suas oportunidades de forma prática e ágil.
          </p>
        </div>
        <div className='divider-form'>
          <div className='content-form-signup'>
            <LogoImg colorType='primary'/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                type='text'
                label='Nome Completo'
                {...register('name')}
                error={errors.name}
              />
              <InputText
                type='text'
                label='Email'
                {...register('email')}
                error={errors.email}
              />
              <InputText
                type='password'
                label='Senha'
                {...register('password')}
                error={errors.password}
                isPassword
              />
              <InputText
                type='password'
                label='Confirme sua senha'
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isPassword
              />
              <Button variable='primaryButton'>
                Criar conta
              </Button>
            </form>
            <Link to='/'>
              Já possui uma conta? Fazer login
            </Link>
          </div>
        </div>
        {successMessage && (
          <SuccessMessage
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}
      </main>
      <Footer variable='primary' />
    </div>
  );
};

export default SignUp;
