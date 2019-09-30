import * as React from 'react';
import { Todo } from '../todos/types';

interface CProps {
  todo: Todo;
}

const TodoItem = (props: CProps) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title" data-testid="todo-title">
        {props.todo.name}
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        {props.todo.description}
      </div>
    </div>
  </div>
);

export default TodoItem;