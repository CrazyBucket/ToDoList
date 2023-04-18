import { create } from "zustand";

type DoneItem = {
  text: string;
};

type DoneListStore = {
  doneList: DoneItem[];
  addDoneItem: (text: string) => void;
  deleteDoneItem: (index: number) => void;
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
}));

export default useDoneListStore;
