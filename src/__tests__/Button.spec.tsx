
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';
import '@testing-library/jest-dom';

describe('Componente Button', () => {
  it('deve renderizar o botão com o texto correto', () => {
    render(<Button variable="primaryButton">Clique em mim</Button>);
    
    const buttonElement = screen.getByText(/clique em mim/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('deve aplicar a classe correta com base na prop variable', () => {
    render(<Button variable="primaryButton">Clique em mim</Button>);
    
    const buttonElement = screen.getByText(/clique em mim/i);
    expect(buttonElement).toHaveClass('primaryButton');
  });

  it('deve aceitar a propriedade disabled', () => {
    render(<Button variable="secondaryButton" disabled>Clique em mim</Button>);
    
    const buttonElement = screen.getByText(/clique em mim/i);
    expect(buttonElement).toBeDisabled();
  });

});
