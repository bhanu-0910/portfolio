import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name in the hero', () => {
  render(<App />);
  const nameElement = screen.getByText(/Vadla Bhanu Prakash/i);
  expect(nameElement).toBeInTheDocument();
});
