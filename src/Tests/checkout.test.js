import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importar o MemoryRouter
import '@testing-library/jest-dom';
import React from 'react';
import mock from '../Mock/mock_carrinho.json';
import Checkout from '../Pages/Checkout';

test('Is checkout render', () => {
  render(
    <MemoryRouter> 
      <Checkout carrinho={mock} />
    </MemoryRouter>
  );
});