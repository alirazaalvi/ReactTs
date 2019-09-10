import '@testing-library/jest-dom/extend-expect'
import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import Input from './Input';

afterEach(cleanup);

test('can render input', () => {
  const testId = 'Hello'
  const { getByTestId } = render(
    <Input
      name="Test"
      data-testid={testId}
      className="input"
      value="hello"
    />
  );
  const elem = getByTestId(testId);
  expect(elem).toHaveClass('input');
});