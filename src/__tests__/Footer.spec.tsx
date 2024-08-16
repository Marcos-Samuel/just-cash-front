import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('should render with primary class when variable is primary', () => {
    render(<Footer variable="primary" />);
    const footerElement = screen.getByRole('contentinfo'); 
    expect(footerElement).toHaveClass('primary');
  });

  it('should render with secondary class when variable is secondary', () => {
    render(<Footer variable="secondary" />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('secondary');
  });

  it('should display the correct logo and content', () => {
    render(<Footer variable="primary" />);

    expect(screen.getByTestId('logo-img')).toBeInTheDocument();

    expect(screen.getByText(/Somos especialistas em antecipação de honorários advocatícios/)).toBeInTheDocument();
    expect(screen.getByText(/Horário de Atendimento Seg a Sex das 8h30 às 18h/)).toBeInTheDocument();
    expect(screen.getByText(/Endereço/)).toBeInTheDocument();
    expect(screen.getByText(/Trend Nova Carlos Gomes Av. Sen. Tarso Dutra, 565 - 1011 Petrópolis,/)).toBeInTheDocument();
    expect(screen.getByText(/Sobre/)).toBeInTheDocument();
    expect(screen.getByText(/Somos uma empresa especializada em antecipação de honorários advocatícios e análises jurídicas/)).toBeInTheDocument();
  });
});