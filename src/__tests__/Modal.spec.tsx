import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal'; 

describe('Componente Modal', () => {
  it('deve renderizar o modal quando isOpen for true', () => {
    render(<Modal isOpen={true} onClose={() => {}} title="Título do Modal">Conteúdo do Modal</Modal>);
    expect(screen.getByText('Título do Modal')).toBeInTheDocument();
    expect(screen.getByText('Dados do Lead')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo do Modal')).toBeInTheDocument();
  });

  it('não deve renderizar o modal quando isOpen for false', () => {
    const { container } = render(<Modal isOpen={false} onClose={() => {}} title="Título do Modal">Conteúdo do Modal</Modal>);
    expect(container.querySelector('.modal-overlay')).toBeNull();
  });

  it('deve chamar onClose quando o botão de fechar for clicado', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose} title="Título do Modal">Conteúdo do Modal</Modal>);

    fireEvent.click(screen.getByRole('button', { name: /×/ })); 
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
