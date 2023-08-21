import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';

test('If home is apear', () => {
  render(

    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  )
  const div = screen.getByText('Seja bem vindo');
  expect(div).toBeInTheDocument();
})
