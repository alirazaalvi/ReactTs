import React from 'react';
import { fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../testUtils/testingHelper';
import UserCounter from './UserCounter';

afterEach(cleanup);

const label = 'Counter';
test('can render default view', async () => {
    const { getByText } = renderWithRedux(<UserCounter label={label} />);

    const elem = getByText(label);
    expect(elem.innerHTML).toBe(label);
});

test('increment the counter', async () => {
    const { getByTestId } = renderWithRedux(<UserCounter label={label} />);
    fireEvent.click(getByTestId('decrement'));
    const counterNode = await waitForElement(() => getByTestId('count'));

    expect(counterNode).toHaveTextContent('1');
});

test('increment the counter', async () => {
    const { getByTestId } = renderWithRedux(<UserCounter label={label} />);
    fireEvent.click(getByTestId('decrement'));
    const counterNode = await waitForElement(() => getByTestId('count'));

    expect(counterNode).toHaveTextContent('-1');
});