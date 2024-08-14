import './style.css';
import LogoImg from '../../assets/logo/logoHeader';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <LogoImg color='#FFFFFF' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti ullam aspernatur est omnis officiis at, culpa impedit suscipit voluptatem?</p>
      </div>
      <div>
        <strong>
          Endereço
        </strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quasi, inventore, a voluptatum natus excepturi repellendus eum vel atque reiciendis, enim nobis .
        </p>
      </div>
      <div>
        <strong>
          Sobre
        </strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quasi, inventore, a voluptatum natus excepturi repellendus eum vel atque reiciendis, enim nobis .
        </p>
      </div>
      <div>

      </div>
    </footer>
  );
};

export default Footer;