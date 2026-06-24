import React from 'react'
import { useLocation } from '../../hooks/useLocation';
import { useFavStore } from '../../store/favoritesStore';
import { useAuthStore } from '../../store/authStore';
import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FavouriteCard({favId}) {

    const { data: location, isLoading, isError, error } = useLocation(favId);
    const removeFavorite = useFavStore(state => state.removeFavorite);
    const userId = useAuthStore(store=> store.user).id;

    if (isLoading) {
        return <li>Loading...</li>;
    }
    if (isError) return <p>{error.message}</p>;

    return (
      <Card className="w-full max-w-md transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary">
            {location.name}
          </CardTitle>
        </CardHeader>
  
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><b>Address:</b> {location.address}</p>
        </CardContent>
  
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link to={`/dashboard/location/${favId}`}>View Details</Link>
          </Button>
          <Button
            variant="destructive"
            onClick={() => removeFavorite(String(userId), String(favId))}
          >
            Remove from favourites
          </Button>
        </CardFooter>
      </Card>
    );
  }
  