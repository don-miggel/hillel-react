import React from 'react'
import { useLocation } from '../../hooks/useLocation';
import { useFavStore } from '../../store/favoritesStore';
import { Link } from 'react-router';

export default function FavouriteCard({favId}) {

    const { data: location, isLoading, isError, error } = useLocation(favId);
    const removeFavorite = useFavStore(state => state.removeFavorite);

    if (isLoading) {
        return <li>Loading...</li>;
    }
    if (isError) return <p>{error.message}</p>;

  return (
    <li>
        <p>Name: {location.name}</p>
        <p>Address: {location.address}</p>
      <Link to={`/dashboard/location/${favId}`}>
            View Details
      </Link>
      {"        "}
      <button onClick={()=>removeFavorite(String(favId))}>Remove from favourites</button>
    </li>
  );
}
