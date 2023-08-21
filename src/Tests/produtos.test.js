import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Produtos from '../Pages/Produtos';

test('If product exist', () => {


  render(
    <BrowserRouter>
      <Produtos handleCarrinho={() => {}} carrinho={[]} /> {/* Passando funções vazias */}
    </BrowserRouter>
  );
  const produtos = screen.getAllByTestId('produtos');
  fireEvent.click(produtos[0]);

    // Verifique se a div h1 contém o texto "Nossos Produtos"
    const h1Element = screen.getByRole('heading', { name: /Nossos Produtos/i });
    expect(h1Element).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Pesquise os melhores produtos');
    expect(searchInput).toBeInTheDocument();
  
});

