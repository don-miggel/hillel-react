import React from 'react'
import { Link } from "react-router";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationCard({fav, location}) {
  return (
    <Card
        key={location.id}
        className="transition-shadow hover:shadow-md hover:border-primary relative"
    >
    <CardHeader>
      <CardTitle className="flex items-center justify-between text-lg font-medium text-primary">
        <Link
          to={`/dashboard/location/${location.id}`}
          className="hover:underline"
        >
          {location.name}
        </Link>
        <Star
          className={`h-5 w-5 ${
            fav ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          }`}
        />
      </CardTitle>
    </CardHeader>
  </Card>
  )
}

