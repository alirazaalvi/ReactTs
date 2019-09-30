import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, DispatchType } from '../../store';
import { addTodo } from './actions';
import { Todo } from '../../features/todos/types';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoContainer = () => {
  const handleAddTodo = (todo: Todo) => (dispatch(addTodo(todo)));

  const todos = useSelector((state: AppState) => state.todoReducer.todos);
  const dispatch: DispatchType = useDispatch();

  // useEffect(() => {
  //   const todo: Todo = { id: 1, name: 'First Todo', description: 'Todos description', lastModified: '01-01-2019' };
  //   const todo2: Todo = { id: 2, name: 'Second Todo', description: 'Todos description', lastModified: '01-01-2019' };
  //   dispatch(addTodo(todo));
  //   dispatch(addTodo(todo2));
  // }, [dispatch]);

  return (
    <div data-testid="todo-container">
      <AddTodo handleAddTodo={handleAddTodo} />
      <br />
      <TodoList todos={todos} />
  </div>);
};

export default TodoContainer;