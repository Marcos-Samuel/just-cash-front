import { SubmitHandler, useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import { IFormLogin, IFormRegister } from '../../utils/interface';
import './style.css';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo/logoHeader';
import Button from '../../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../utils/schemas/registerSchema';

const SignUp: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormRegister>({
    resolver: zodResolver(registerSchema)
  });
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    console.log(data);
    
  };

  return (
    <div className='conteiner-signup' >
      <Header />
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
            <LogoImg colorType='secondary'/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                type='text'
                label='Nome Completo*'
                {...register('name')}
                error={errors.name}
              />
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
              <InputText
                type='password'
                label='Confirme sua senha*'
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isPassword
              />
              <Button>
                Cadastrar
              </Button>
            </form>
            <Link to='/'>
              Já possui uma conta? Fazer login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
