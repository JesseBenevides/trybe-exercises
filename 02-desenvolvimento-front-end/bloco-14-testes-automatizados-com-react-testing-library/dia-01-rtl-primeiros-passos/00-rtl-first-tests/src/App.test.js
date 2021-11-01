import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe o input do tipo email', () => {
  // Acessar os Elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText(/email/i);

  // Realizar os testes
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email')
});

