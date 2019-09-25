import * as React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../todos/types';

interface CProps {
  todos: Todo[];
}

const TodoList = (props: CProps) => (
  <div>
    {
      props.todos.map((todo) => (
        <div className="columns" key={`${todo.id}-${todo.name}`}>
          <div className="column">
            <TodoItem todo={todo} />
          </div>
        </div>
      ))
    }
  </div>
);

export default TodoList;