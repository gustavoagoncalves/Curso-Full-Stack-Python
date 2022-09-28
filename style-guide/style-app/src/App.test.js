import { render, screen } from '@testing-library/react';
import App from './App';

test('sign', () => {
  render(<App />);
  const Typography = document.querySelector('.App h1');
  expect(Typography).toHaveTextContent(/sign up/i);
});
