import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testes na validação do email', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    // Acessar os Elementos da tela
    const USER_EMAIL = 'email@email.com';
    render(<ValidEmail email={ USER_EMAIL } />);
    const isValid = screen.getByText('Email Válido');
  
    //Realizar os testes
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testando um componente, caso o email seja inválido.', () => {
    // Acessar os Elementos da tela
    const USER_EMAIL = 'email.com';
    render(<ValidEmail email={ USER_EMAIL } />);
    const isValid = screen.getByText('Email Inválido');
  
    //Realizar os testes
    expect(isValid).toBeInTheDocument();
  });
});