import React from 'react';
import { render, screen } from '@testing-library/react';
import Kalkulator from './App';
test('renders learn react link', () => {
  render(<Kalkulator/>);
  const linkElement = screen.getByText(/Kalkulator/i);
  expect(linkElement).toBeInTheDocument();
});
