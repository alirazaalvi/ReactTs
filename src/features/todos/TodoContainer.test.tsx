import * as React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../testUtils/testingHelper';
import TodoContainer from './TodoContainer';

afterEach(cleanup);

test('can render todo item', () => {
  const { getByTestId } = renderWithRedux(<TodoContainer />);

  expect(getByTestId('todo-container')).toBeInTheDocument();
});