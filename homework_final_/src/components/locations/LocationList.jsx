import { useLocations } from "../../hooks/useLocations";
import { Link } from "react-router";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useFilteredLocations } from "@/hooks/useFilteredLocations";
import { useFavStore } from "@/store/favoritesStore";
import { useAuthStore } from "@/store/authStore";

export default function LocationList() {

  const { data: locations = [], isLoading, isError, error } = useLocations();
  const filteredLocations = useFilteredLocations(locations);
  const isFavourite = useFavStore(state => state.isFavourite);
  const currentUserId = useAuthStore(store => store.user).id;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-6">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
        Map Route Title
      </h2>

      {filteredLocations.length ? (
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLocations.map((loc) => {
            const fav = isFavourite(currentUserId, loc.id);
            return (
              <Card
                key={loc.id}
                className="transition-shadow hover:shadow-md hover:border-primary relative"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg font-medium text-primary">
                    <Link
                      to={`/dashboard/location/${loc.id}`}
                      className="hover:underline"
                    >
                      {loc.name}
                    </Link>

                    {/* Star icon */}
                    <Star
                      className={`h-5 w-5 ${
                        fav ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-muted-foreground">No locations present</p>
      )}
    </div>
  );
}