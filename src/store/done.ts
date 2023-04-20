import { create } from "zustand";
import useTodoStore from "./todo";

type DoneItem = {
  text: string;
};

type DoneListStore = {
  doneList: DoneItem[];
  addDoneItem: (text: string) => void;
  deleteDoneItem: (index: number) => void;
  undo: () => void;
};

const useDoneListStore = create<DoneListStore>((set, get) => ({
  doneList: [],
  addDoneItem: (text: string) => {
    set(state => ({
      doneList: [...state.doneList, { text }],
    }));
  },
  deleteDoneItem: (index: number) => {
    set(state => {
      const doneList = [...state.doneList];
      doneList.splice(index, 1);
      return { doneList };
    });
  },
  undo: () => {
    const lastItem = get().doneList[get().doneList.length - 1];
    if (lastItem) {
      useTodoStore.getState().addTodo(lastItem.text);
      set(state => ({
        doneList: state.doneList.slice(0, state.doneList.length - 1),
      }));
    }
  },
}));

export default useDoneListStore;
