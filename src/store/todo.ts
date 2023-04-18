import { create } from "zustand";

type Todo = {
  text: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (index: number) => void;
};

const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  addTodo: text => {
    set(state => ({
      todos: [...state.todos, { text }],
    }));
  },
  deleteTodo: index => {
    set(state => ({
      todos: state.todos.filter((todo, i) => i !== index),
    }));
  },
}));

export default useTodoStore;
