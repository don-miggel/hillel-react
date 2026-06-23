import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { useLocations } from "@/hooks/useLocations";
  
  export default function KpiCards() {
    const { data: locations = [], isLoading, isError, error } = useLocations();
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p className="text-red-500">{error.message}</p>;
  
    const totalLocations = locations.length;
    const totalShipments = locations.reduce((sum, loc) => sum + loc.shipments, 0);
    const averageRating = (
      locations.reduce((sum, loc) => sum + loc.rating, 0) / totalLocations
    ).toFixed(1);
  
    return (
      <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total shipments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold tracking-tight">{totalShipments.toLocaleString()}</p>
          </CardContent>
        </Card>
  
        <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold tracking-tight">{averageRating}</p>
          </CardContent>
        </Card>
  
        <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold tracking-tight">{totalLocations}</p>
          </CardContent>
        </Card>
      </div>
    );
  }



