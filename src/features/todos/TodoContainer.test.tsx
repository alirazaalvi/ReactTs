import * as React from 'react';
import { cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../testUtils/testingHelper';
import TodoContainer from './TodoContainer';

afterEach(cleanup);

test('can render todo item', () => {
  const { getByTestId } = renderWithRedux(<TodoContainer />);

  expect(getByTestId('todo-container')).toBeInTheDocument();
});

test('can add todo item', async() => {
  const { getByTestId, queryByText } = renderWithRedux(<TodoContainer />);

  const todoTitle = 'first todo';
  fireEvent.change(getByTestId('title-input'), {target: {value: todoTitle}});
  fireEvent.click(getByTestId('submit-todo'));

  const todoItemTitleElement = await waitForElement(() => queryByText(todoTitle));
  expect(todoItemTitleElement).toHaveTextContent(todoTitle);
});