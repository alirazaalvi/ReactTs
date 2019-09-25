import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from './TodoItem';
import { Todo } from './types';

afterEach(cleanup);

test('can render todo item', () => {
  const todo: Todo  = { id: 1, name: 'Title', description: 'First Item' };
  const { queryByText } = render(<TodoItem todo={todo} />);

  expect(queryByText(todo.name)).toBeInTheDocument();
  expect(queryByText(todo.description!)).toBeInTheDocument();
});