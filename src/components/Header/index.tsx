import './style.css';
import LogoutIcon from '../../assets/Icons/icone-quit';
import LogoImg from '../../assets/logo/logoHeader';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLogout?: boolean
 }

const Header: React.FC<HeaderProps> = ({ isLogout }) => {
  return (
    <header>
      <div>
        <LogoImg color='#072854' />
      </div>
      {isLogout &&
      <div>
        <LogoutIcon/>
      </div> }
    </header>
  );
};

export default Header;