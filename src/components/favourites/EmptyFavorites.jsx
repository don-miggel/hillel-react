import { Star } from "lucide-react";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-3">
      <Star className="h-10 w-10 text-muted-foreground" />
      <h3 className="text-lg font-semibold">No favorite locations</h3>
      <p className="text-sm text-muted-foreground">
        You haven’t added any favorites yet.
      </p>
    </div>
  );
}