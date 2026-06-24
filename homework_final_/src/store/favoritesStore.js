
import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useFavStore = create(
  persist(
    (set, get) => ({

    
      favourites: {},

      addFavorite: (userId, favId) =>
        set((state) => ({
          favourites: {
            ...state.favourites, 
            [userId]: [...(state.favourites[userId] || []), favId],
          }
        })
      ),

      removeFavorite: (userId, favId) =>
        set((state) => ({
          favourites: {
          ...state.favourites,
          [userId]: (state.favourites[userId] || []).filter(
            id => id !== favId
            )
          }
        })),

      toggleFavourite: (userId, favId) => {

        if (get().isFavourite(userId, favId)) {
          get().removeFavorite(userId, favId);
        } else {
          get().addFavorite(userId, favId);
        }
      },

      isFavourite: (userId, favId) =>
        (get().favourites[userId] || []).includes(favId),

    }),
    {
      name: "fav-storage"
    }
  )
);