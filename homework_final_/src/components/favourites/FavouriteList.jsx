import React from 'react'
import { useFavStore } from '../../store/favoritesStore';
import { useAuthStore } from '../../store/authStore';
import FavouriteCard from './FavouriteCard';
import EmptyFavorites from './EmptyFavorites';


export default function FavouriteList() {

    const userId = useAuthStore(state=>state.user).id;

     if(!userId)
       throw new Error("Some error occurred");
    
    console.log(userId, "userId in favs list")
    
    const favourites = useFavStore(
        state => state.favourites
      );

      const favsByUser = favourites[userId];
      console.log(favourites, "favs users ")
      
      return favsByUser && favsByUser.length ? (
        <ul>
          {favsByUser.map(favId => (
            
            <FavouriteCard
              key={Number(favId)}
              favId={Number(favId)}
            />

          ))}
        </ul>
      ) : (
        < EmptyFavorites />
      );
}
