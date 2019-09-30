import * as React from 'react';
import { cleanup, render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddTodo from './AddTodo';

afterEach(cleanup);


const handleAddTodo = jest.fn();

test('can render add todo', async() => {
  const { getByTestId } = render(<AddTodo handleAddTodo={handleAddTodo} />);

  expect(getByTestId('title-input')).toBeInTheDocument();
  expect(getByTestId('submit-todo')).toBeInTheDocument();
});

test('can display error when submit without adding title', async() => {
  const { getByTestId } = render(<AddTodo handleAddTodo={handleAddTodo} />);

  fireEvent.click(getByTestId('submit-todo'));
  const errorMessageElement = await waitForElement(() => getByTestId('error-title'));
  expect(errorMessageElement).toBeInTheDocument();
});

test('can submit without displaying an error', async() => {
  const { getByTestId } = render(<AddTodo handleAddTodo={handleAddTodo} />);

  fireEvent.change(getByTestId('title-input'), {target: {value: 'first todo'}});
  fireEvent.click(getByTestId('submit-todo'));

  await(() => {
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(getByTestId('error-title')).toBeNull();
  });
});