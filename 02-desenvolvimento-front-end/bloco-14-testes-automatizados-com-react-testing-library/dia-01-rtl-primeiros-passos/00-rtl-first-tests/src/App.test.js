import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de inserção de email', () => {

  it('Verifica se existe o input do tipo email', () => {
    // Acessar os Elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText(/email/i);
  
    // Realizar os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email')
  });
  
  it('Verifica se existem 2 botões', () => {
    // Acessar os Elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole('button');
  
    // Realizar os testes
    expect(buttons).toHaveLength(2);
  });
  
  it('Verifica se existe um botão de enviar', () => {
    // Acessar os Elementos da tela
    render(<App />);
    const sendButton = screen.getByTestId('id-send');
  
    // Realizar os testes
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveProperty('type', 'button');
    expect(sendButton).toHaveValue('Enviar')
  });
  
  it('Verifica se ao clicar no botão enviar, renderiza o email digitado', () => {
    // Acessar os Elementos da tela
    render(<App />);
  
    const USER_EMAIL = 'jesse@trybe.com'
  
    const inputEmail = screen.getByLabelText(/email/i);
    const sendButton = screen.getByTestId('id-send');
    const textEmail = screen.getByTestId('id-email-user')
  
    //Interagir com os elementos
    userEvent.type(inputEmail, USER_EMAIL);
    userEvent.click(sendButton);
  
    // Realizar os testes
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${USER_EMAIL}`)
  });
});