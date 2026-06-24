import React from "react";
import { useSearchParams } from "react-router";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  

export default function LocationSort() {

  const [searchParams, setSearchParams] =
    useSearchParams();

  const sort =
    searchParams.get("sort") || "name";

  const handleSort = (value) => {

    setSearchParams((prev) => {

      const params =
        new URLSearchParams(prev);

      params.set("sort", value);

      return params;
    });
  };

  return  (
    <div>
      <Select  value={sort} onValueChange={handleSort}>
        <SelectTrigger className="w-[180px] focus-visible:ring-2 focus-visible:ring-primary">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
          <SelectItem value="shipments">Shipments</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}