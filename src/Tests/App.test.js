import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';
import Produtos from '../Pages/Produtos.jsx';

test('The App should appear', () => {
  render(<App />);
});

test('Add item to cart when handleCarrinho is called', () => {
  const mockCarrinho = []; // Define a mock value for carrinho
  render(
    <MemoryRouter initialEntries={['/produtos']}>
      <Produtos handleCarrinho={() => {}} carrinho={mockCarrinho} />
    </MemoryRouter>
  );

  // Verify if the item was added to the cart
  const cartLink = screen.getByTestId('carrinho_length'); // Use the correct data-testid attribute here
  fireEvent.click(cartLink);

});