import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Carrinho from '../Pages/Carrinho';
import mock from '../Mock/mock_carrinho.json';
import { MemoryRouter } from 'react-router-dom'; // Usar o MemoryRouter em vez do BrowserRouter

test('If carrinho appears', () => {
  render(
    <MemoryRouter>
      <Carrinho carrinho={mock} /> 
    </MemoryRouter>
  );

  // Aqui você pode fazer asserções para verificar se o componente Carrinho renderiza corretamente
  const carrinhoItems = screen.getAllByTestId('itemCarrinho');
  expect(carrinhoItems).toHaveLength(mock.length); // Verifica se a quantidade de itens no carrinho é igual ao comprimento do mock
});

