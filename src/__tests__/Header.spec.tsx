import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { KEYS, removeItem } from '../services/storageService';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
  
jest.mock('../services/storageService', () => ({
  KEYS: {
    LEADS: 'leads',
    USERS: 'users',
    TOKEN: '@jusCashToken',
  },
  removeItem: jest.fn(),
}));
  
describe('Componente Header', () => {
  const navigate = jest.fn();
  
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });
  
  it('deve renderizar com a classe primary quando a variável for primary', () => {
    render(<Header variable="primary" />);
    const headerElement = screen.getByRole('banner'); 
    expect(headerElement).toHaveClass('primary');
  });
  
  it('deve renderizar com a classe secondary quando a variável for secondary', () => {
    render(<Header variable="secondary" />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('secondary');
  });
  
  it('deve exibir o ícone de logout quando isLogout for verdadeiro', () => {
    render(<Header isLogout variable="primary" />);
    expect(screen.getByRole('button')).toBeInTheDocument(); 
  });
  
  it('não deve exibir o ícone de logout quando isLogout for falso', () => {
    render(<Header variable="primary" />);
    expect(screen.queryByRole('button')).toBeNull(); 
  });
  
  it('deve chamar a função handleLogout e navegar para a página inicial ao clicar no logout', () => {
    render(<Header isLogout variable="primary" />);
    const logoutIcon = screen.getByRole('button'); 
    fireEvent.click(logoutIcon);
    expect(removeItem).toHaveBeenCalledWith(KEYS.TOKEN);
    expect(navigate).toHaveBeenCalledWith('/');
  });
  
  it('deve renderizar a imagem do logo', () => {
    render(<Header variable="primary" />);
    expect(screen.getByTestId('logo-img')).toBeInTheDocument();
  });
});