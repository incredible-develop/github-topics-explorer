import { render } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';

test('render h1 element', () => {
  const { container } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  expect(container).toBeTruthy();
});
