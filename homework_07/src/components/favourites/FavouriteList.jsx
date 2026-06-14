import React from 'react'
import { useFavStore } from '../../store/favoritesStore';
import FavouriteCard from './FavouriteCard';


export default function FavouriteList() {

    const favourites = useFavStore(
        state => state.favourites
      );
      
      return favourites.length ? (
        <ul>
          {favourites.map(favId => (
            
            <FavouriteCard
              key={Number(favId)}
              favId={Number(favId)}
            />

          ))}
        </ul>
      ) : (
        <h2>No favorite locations yet</h2>
      );
}
