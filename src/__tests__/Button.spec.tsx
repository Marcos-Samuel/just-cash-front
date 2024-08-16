/** 
* @jest-ambiente jsdom 
*/

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button Component', () => {
  test('renders with correct class and content', () => {
    // Renderiza o componente Button com props
    render(<Button variable="primaryButton">Click me</Button>);
    
    // Verifica se o botão está no documento
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    
    // Verifica se a classe CSS correta está aplicada
    expect(buttonElement).toHaveClass('primaryButton');
  });

  test('handles additional props correctly', () => {
    // Renderiza o componente Button com um atributo adicional
    render(<Button variable="secondaryButton" disabled>Click me</Button>);
    
    // Verifica se o botão está desativado
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });
});
