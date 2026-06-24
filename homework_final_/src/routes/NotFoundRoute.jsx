import React from 'react'
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NotFoundRoute() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
      <SearchX className="h-12 w-12 text-muted-foreground" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-sm text-muted-foreground">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button onClick={() => navigate("/dashboard/map")} className="mt-2">
        Back to Home
      </Button>
    </div>
  );
}
