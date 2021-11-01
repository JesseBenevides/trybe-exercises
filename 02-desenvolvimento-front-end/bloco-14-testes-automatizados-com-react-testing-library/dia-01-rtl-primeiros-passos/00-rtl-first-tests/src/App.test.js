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

test('Verifica se existem 2 botões', () => {
  // Acessar os Elementos da tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  // Realizar os testes
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe um botão de enviar', () => {
  // Acessar os Elementos da tela
  render(<App />);
  const sendButton = screen.getByTestId('id-send');

  // Realizar os testes
  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveProperty('type', 'button');
  expect(sendButton).toHaveValue('Enviar')
});