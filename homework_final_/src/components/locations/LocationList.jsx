import { useLocations } from "../../hooks/useLocations";
import { useFilteredLocations } from "@/hooks/useFilteredLocations";
import { useFavStore } from "@/store/favoritesStore";
import { useAuthStore } from "@/store/authStore";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const { data: locations = [], isLoading, isError, error } = useLocations()
  const filteredLocations = useFilteredLocations(locations)
  const isFavourite = useFavStore(state => state.isFavourite)
  const currentUserId = useAuthStore(store => store.user).id

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p className="text-red-500">{error.message}</p>

  if (!filteredLocations.length) {
    return <p className="text-muted-foreground">No locations present</p>
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredLocations.map((loc) => {
        const fav = isFavourite(currentUserId, loc.id)
        return (
          < LocationCard key={loc.id} fav={fav} location={loc} />
        )
      })}
    </div>
  )
}