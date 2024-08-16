import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import SignIn from '../pages/SignIn';
import { loginUser } from '../services/user';

jest.mock('../services/user');

describe('SignIn Component', () => {
  beforeEach(() => {
    (loginUser as jest.Mock).mockReset();
  });

  it('renders the SignIn form', () => {
    render(
      <Router>
        <SignIn />
      </Router>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  it('shows success message and navigates on successful login', async () => {
    (loginUser as jest.Mock).mockResolvedValue({ success: true });

    render(
      <Router>
        <SignIn />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Login realizado com sucesso!/i)).toBeInTheDocument();
    });
  });

  it('shows error message when login fails', async () => {
    (loginUser as jest.Mock).mockResolvedValue({ success: false, message: 'Login falhou!' });

    render(
      <Router>
        <SignIn />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Login falhou!/i)).toBeInTheDocument();
    });
  });
});
