import React from 'react'
import LocationSearch from './LocationSearch'
import LocationSort from './LocationSort'
import ResetFiltersBtn from './ResetFiltersBtn'

export default function LocationFilters() {
    return (
      <div className="flex flex-col gap-3 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:items-end sm:gap-4">
        <LocationSearch />
        <LocationSort />
        <ResetFiltersBtn />
      </div>
    );
  }

