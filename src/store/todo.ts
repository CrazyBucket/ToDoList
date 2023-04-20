import { create } from "zustand";
import useDoneListStore from "./done";

type Todo = {
  text: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (index: number) => void;
  moveTodoToTop: (index: number) => void;
};

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  addTodo: (text: string) => {
    set(state => ({
      todos: [...state.todos, { text }],
    }));
  },
  deleteTodo: index => {
    set(state => {
      const todos = [...state.todos];
      const item = todos.splice(index, 1)[0];
      useDoneListStore.getState().addDoneItem(item.text); // 添加doneItem
      return { todos };
    });
  },
  moveTodoToTop: index => {
    set(state => {
      const todos = [...state.todos];
      const item = todos.splice(index, 1)[0];
      todos.unshift(item);
      return { todos };
    });
  },
}));

export default useTodoStore;
