import React from "react";
import { useSearchParams } from "react-router";
import { Input } from "../ui/input";

export default function LocationSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (key, value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
  
      if (value.trim()) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
  
      return params;
    });
  };
  
  return (
    <div className="flex-1">
      <Input
        type="text"
        value={search}
        placeholder="Enter your search text..."
        className="w-full focus-visible:ring-2 focus-visible:ring-primary"
        onChange={(e) =>
            handleSearch("search", e.target.value)}
      />
    </div>
  );
}