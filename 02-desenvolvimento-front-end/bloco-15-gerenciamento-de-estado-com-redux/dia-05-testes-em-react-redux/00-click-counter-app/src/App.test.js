import React from 'react'
import { cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './utils/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const clickButton = queryByText('Clique aqui');

    expect(clickButton).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, getByRole } = renderWithRedux(
      <App />,
      { initialState: { clickReducer: { counter: 10 }}});

    expect(queryByText('10')).toBeInTheDocument();

      const clickButton = getByRole('button', { name: 'Clique aqui'});
      expect(clickButton).toBeInTheDocument();

      userEvent.click(clickButton);
      expect(queryByText('11')).toBeInTheDocument();
  });

});
