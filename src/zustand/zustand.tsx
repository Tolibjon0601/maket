import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

let useStore = create<Store>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  toggleFavorite: (id: number) => {
    set((state) => {
      const isFavorite = state.favorites.includes(id);
      const updatedFavorites = isFavorite
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    });
  },
}));

useStore = persist(useStore, { name: "favorites" });
useStore = devtools(useStore);

export default useStore;
