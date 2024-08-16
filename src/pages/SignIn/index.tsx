import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo/logoHeader';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import './style.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormLogin } from '../../utils/interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../utils/schemas/LoginSchema';
import { loginUser } from '../../services/user';
import { useState } from 'react';
import SuccessMessage from '../../components/SuccessMessage';

const SignIn: React.FC = () => {

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { register, handleSubmit, setError, reset, formState:{ errors } } = useForm<IFormLogin>({
    resolver: zodResolver(LoginSchema)
  });

  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    try {
      const user = await loginUser(data);
      if (!user.success) {
        setError('password', {
          type: 'manual',
          message: user.message
        });
        return;
      }
      reset();
      setSuccessMessage('Login realizado com sucesso!'); 
      setTimeout(() => {
        setSuccessMessage(null); 
        navigate('/home');
      }, 3000);
      
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className='container-signIn'>
      <Header variable='primary'/>
      <main className='content-main-signIn'>
        <div className='content-form'>
          <LogoImg colorType='primary'/>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button variable='primaryButton'>
              Entrar
            </Button>
          </form>
          <Link to='/sign-up'>
           Não possui uma conta? Cadastre-se
          </Link>
        </div>
        {successMessage && (
          <SuccessMessage
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}
      </main>
      <Footer variable='primary'/>
    </div>
  );
};

export default SignIn;