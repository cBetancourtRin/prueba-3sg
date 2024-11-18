import { create } from "zustand";

type GroupType = {
  x: boolean;
  a: boolean;
  b1: boolean;
  b2: boolean;
  c: boolean;
  d: boolean;
  e: boolean;
  f: boolean;
  g: boolean;
};

type Store = {
  count: number;
  stepForm: number;
  setStepForm: () => void;
  groupType: GroupType;
  setGrouptype: (newGroup: Partial<GroupType>) => void;
  inc: () => void;
};

const voluntaryStore = create<Store>()((set) => ({
  stepForm: 0,
  setStepForm: () =>
    set((state) => ({ stepForm: state.stepForm + 1 })), // Corrige el argumento

  groupType: {
    x: false,
    a: false,
    b1: false,
    b2: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
  },

  setGrouptype: (newGroup) =>
    set((state) => ({
      groupType: { ...state.groupType, ...newGroup },
    })),

  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default voluntaryStore;
