import { useLocation } from "../../hooks/useLocation";
import { useNavigate, useParams } from "react-router";
import { useFavStore } from "../../store/favoritesStore";
import ErrorRoute from "../../routes/ErrorRoute";

export default function LocationCard() {

  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);
  const isFavourite = useFavStore(state=>state.isFavourite);
  const toggleFavourite = useFavStore(state=>state.toggleFavourite);


  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const handleToggle=(id) =>{
    toggleFavourite(id);
    navigate(`/dashboard/location/${id}`);
  }

  return Object.keys(location).length ? (
    <ul>
      <li><b>Name:</b> {location.name}</li>
      <li><b>Address:</b> {location.address}</li>
      <li><b>Type:</b> {location.type}</li>
      <li><b>City:</b>City: {location.city}</li>
      <li><b>Working hours:</b> {location.workingHours}</li>
      <br />
      <button onClick={()=>handleToggle(location.id)}> 
        {
        isFavourite(location.id)
        ? "Remove from Favs" 
        : "Add to Favs "}
      </button>
    </ul>
  ) : <ErrorRoute />;
}