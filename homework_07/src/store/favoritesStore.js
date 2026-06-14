import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavStore = create(
  persist(
    (set, get) => ({

      favourites: [],

      addFavorite: (favId) =>
        set((state) => ({
          favourites: [...state.favourites, favId]
        })),

      removeFavorite: (favId) =>
        set((state) => ({
          favourites: state.favourites.filter(
            id => id !== favId
          )
        })),

      toggleFavourite: (favId) => {

        if (get().isFavourite(favId)) {
          get().removeFavorite(favId);
        } else {
          get().addFavorite(favId);
        }
      },

      isFavourite: (favId) =>
        get().favourites.includes(favId),

    }),
    {
      name: "fav-storage"
    }
  )
);