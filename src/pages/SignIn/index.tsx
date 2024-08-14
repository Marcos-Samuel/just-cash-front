
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import './style.css';

const SignIn: React.FC = () => {
  return (
    <>
      <Header/>
      <main className='container-signIn'>
        <form>
          <InputText type='text' name='Email*' />
          <InputText type='text' name='Senha' isPassword/>
          <Button>
             Cadastrar
          </Button>
        </form>
      </main>
      <Footer/>
    </>
  );
};

export default SignIn;