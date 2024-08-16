// src/__tests__/InputText.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputText from '../components/InputText';
import { FieldError } from 'react-hook-form';

// Mock dos ícones
jest.mock('../assets/Icons/CloseEyeIcon', () => () => <div>CloseEyeIcon</div>);
jest.mock('../assets/Icons/OpenEyeIcon', () => () => <div>OpenEyeIcon</div>);

describe('InputText Component', () => {
  it('deve renderizar com o label e o tipo correto', () => {
    render(<InputText label="Nome" type="text" />);
    expect(screen.getByLabelText('Nome *')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('deve alternar entre os ícones de visibilidade da senha ao clicar', () => {
    render(<InputText label="Senha" type="password" isPassword />);
    const eyeIcon = screen.getByText('CloseEyeIcon');
    
    expect(eyeIcon).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('CloseEyeIcon'));
    
    expect(screen.getByText('OpenEyeIcon')).toBeInTheDocument();
  });

  it('deve exibir mensagem de erro quando error está presente', () => {
    const error: FieldError = { 
      type: 'manual', 
      message: 'Campo obrigatório' 
    };
    render(<InputText label="Email" error={error} />);
    
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
