import './style.css';
import LogoutIcon from '../../assets/Icons/IconeQuit';
import LogoImg from '../../assets/logo/logoHeader';
import { useNavigate } from 'react-router-dom'; 
import { KEYS, removeItem } from '../../services/storageService';

interface HeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLogout?: boolean;
  variable: 'primary' | 'secondary';
}

const Header: React.FC<HeaderProps> = ({ isLogout, variable }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeItem(KEYS.TOKEN);
    navigate('/');
  };

  return (
    <header className={variable}>
      <div>
        <div>
          <LogoImg colorType={variable} />
        </div>
        {isLogout && (
          <div
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
            role="button" 
            aria-label="Logout">
            <LogoutIcon />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
