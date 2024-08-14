
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import './style.css';

const SignIn: React.FC = () => {
  return (
    <>
      <Header/>
      <main >
        <InputText type='text' name={'teste'} />
        <Button>
        Cadastrar
        </Button>
      </main>
      <Footer/>
    </>
  );
};

export default SignIn;