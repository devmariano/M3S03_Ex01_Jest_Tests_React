import {
  act, render, screen, fireEvent,
} from '@testing-library/react';
import SuccessPage from '../Pages/Success';


test('If sucess page render', () => {
  render(<SuccessPage />)
  const div = screen.getByText('Compra finalizada com sucesso');
  expect(div).toBeInTheDocument()
});
