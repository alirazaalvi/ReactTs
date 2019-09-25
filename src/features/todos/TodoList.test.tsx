import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Todos } from './types';
import TodoList from './TodoList';

afterEach(cleanup);

test('can render todos list', () => {
  const todos: Todos =  [
  { id: 1, name: 'First Title', description: 'First Detail' },
  {id: 2, name: 'Second Title', description: 'Second Detail'}
 ];

  const { queryByText } = render(<TodoList todos={todos} />);

  expect(queryByText(todos[0].name)).toBeInTheDocument();
  expect(queryByText(todos[0].description!)).toBeInTheDocument();

  expect(queryByText(todos[1].name)).toBeInTheDocument();
  expect(queryByText(todos[1].description!)).toBeInTheDocument();
});