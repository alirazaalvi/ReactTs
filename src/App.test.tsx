import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from './testUtils/testingHelper';
import App from './App';

afterEach(cleanup);

const label = 'Boilerplate';
test('can render default view', async () => {
    const { getByText } = renderWithRedux(<App />);

    const elem = getByText(label);
    expect(elem.innerHTML).toBe(label);
});