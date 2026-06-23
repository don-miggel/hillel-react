import { useLocation } from "../../hooks/useLocation";
import { useNavigate, useParams } from "react-router";
import { useFavStore } from "../../store/favoritesStore";
import { useAuthStore } from "../../store/authStore";
import ErrorRoute from "../../routes/ErrorRoute";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LocationCard() {
  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);
  const isFavourite = useFavStore((state) => state.isFavourite);
  const toggleFavourite = useFavStore((state) => state.toggleFavourite);
  const userId = useAuthStore((state) => state.user).id;
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!Object.keys(location).length) return <ErrorRoute />;

  const handleToggle = (userId, favId) => {
    toggleFavourite(userId, favId);
    navigate(`/dashboard/location/${id}`);
  };


  const chartData = location.monthlyStats?.map((value, index) => ({
    month: `M${index + 1}`,
    shipments: value,
  }));

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">

      <Card className="flex-1">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{location.name}</CardTitle>
          <Button
            variant="ghost"
            onClick={() => handleToggle(userId, location.id)}
            className="flex items-center gap-1"
          >
            <Star
              className={`h-5 w-5 ${
                isFavourite(userId, location.id)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
            {isFavourite(userId, location.id) ? "Saved" : "Save"}
          </Button>
        </CardHeader>

        <CardContent className="space-y-2 text-sm">
          <p><b>Address:</b> {location.address}</p>
          <p><b>Type:</b> {location.type}</p>
          <p><b>City:</b> {location.city}</p>
          <p><b>Rating:</b> ⭐ {location.rating}</p>
          <p><b>Shipments:</b> {location.shipments}</p>
          <p><b>Working hours:</b> {location.workingHours}</p>
          <p><b>About this location:</b> {location.description}</p>
        </CardContent>

        <CardFooter>
          <Button
            variant={isFavourite(userId, location.id) ? "destructive" : "default"}
            onClick={() => handleToggle(userId, location.id)}
            className="w-full"
          >
            {isFavourite(userId, location.id)
              ? "Remove from Favs"
              : "Add to Favs"}
          </Button>
        </CardFooter>
      </Card>


      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Monthly Shipments</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="shipments"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
