import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo/logoHeader';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import './style.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormLogin } from '../../utils/interface';

const SignIn: React.FC = () => {

  const { register, handleSubmit } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    
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
            />
            <InputText
              type='password'
              label='Senha*'
              {...register('password')}
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