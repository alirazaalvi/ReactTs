import { Todo } from './types';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

interface addTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export function addTodo(todo: Todo): addTodoAction {
  return {
    type: ADD_TODO,
    payload: todo,
  }
};

export type TodoActionTypes = addTodoAction;
