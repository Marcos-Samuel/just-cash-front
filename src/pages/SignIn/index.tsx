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
import { Login } from '../../services/user';

const SignIn: React.FC = () => {

  const { register, handleSubmit, setError, reset, formState:{ errors } } = useForm<IFormLogin>({
    resolver: zodResolver(LoginSchema)
  });

  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    try {
      const user = await Login(data);
      if (!user.success) {
        setError('password', {
          type: 'manual',
          message: user.message
        });
        return;
      }
      reset();
      navigate('/home');
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className='container-signIn'>
      <Header/>
      <main className='content-main-signIn'>
        <div className='content-form'>
          <LogoImg colorType='secondary'/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText
              type='text'
              label='Email*'
              {...register('email')}
              error={errors.email}
            />
            <InputText
              type='password'
              label='Senha*'
              {...register('password')}
              error={errors.password}
              isPassword
            />
            <Button>
             Cadastrar
            </Button>
          </form>
          <Link to='/sign-up'>
           Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default SignIn;