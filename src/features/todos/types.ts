export interface Todo {
  id?: number;
  name: string;
  description?: string;
  lastModified?: string;
}

export interface Todos extends Array<Todo>{};