import { create } from "zustand";

export const useStore = create((set) => ({
  cards: [],
  count: 0,
  totalPrice: 0,
  cardsInCart: [],

  loadData: async () => {
    try {
      const data = await fetch("http://localhost:3000/cards");
      const res = await data.json();
      set({ cards: res });
    } catch (err) {
      console.log(err);
    }
  },
  countPlus: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  countMinus: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  
  clear: () => {
    set({ count: 0, totalPrice: 0, cardsInCart: [] });
  },
}));
