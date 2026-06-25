import { Star } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import LocationShipmentsChart from "../analytics/LocationShipmentsChart"

export default function LocationDetails({ location, chartData, isFavourite, onToggleFavourite }) {
  return (
    <div className="flex w-full max-w-5xl flex-col gap-6 lg:flex-row">

      <Card className="flex-1">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{location.name}</CardTitle>
          <Button
            variant="ghost"
            onClick={onToggleFavourite}
            className="flex items-center gap-1"
          >
            <Star
              className={`h-5 w-5 ${
                isFavourite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
              }`}
            />
            {isFavourite ? "Saved" : "Save"}
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
            variant={isFavourite ? "destructive" : "default"}
            onClick={onToggleFavourite}
            className="w-full"
          >
            {isFavourite ? "Remove from Favs" : "Add to Favs"}
          </Button>
        </CardFooter>
      </Card>

      <LocationShipmentsChart chartData={chartData} />
    </div>
  )
}