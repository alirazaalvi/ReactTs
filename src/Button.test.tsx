import '@testing-library/jest-dom/extend-expect'
import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);

test('can render default default button', () => {
    const label = 'Hello World!';
    const tempFunc = () => ('');
    const { getByText } = render(<Button cLabel={label} onClick={tempFunc} />);
    const elem = getByText(label);
    expect(elem.innerHTML).toBe(label);
  });