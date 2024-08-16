import './style.css';
import LogoImg from '../../assets/logo/logoHeader';

interface FooterProps {
  variable: 'primary'| 'secondary'
}

const Footer: React.FC<FooterProps> = ({ variable }) => {
  return (
    <footer className={variable}>
      <div className="content-footer">
        <div>
          <LogoImg colorType={variable} />
          <p>
            Somos especialistas em antecipação de honorários advocatícios
            Horário de Atendimento Seg a Sex das 8h30 às 18h
          </p>
        </div>
        <div className='content-address'>
          <strong>Endereço</strong>
          <p>
            Trend Nova Carlos Gomes Av. Sen. Tarso Dutra, 565 - 1011 Petrópolis,
            Porto Alegre / RS 90690-140
          </p>
        </div>
        <div className='content-over'> 
          <strong>Sobre</strong>
          <p>
            Somos uma empresa especializada em antecipação de honorários advocatícios e análises jurídicas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
