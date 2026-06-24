import React from 'react'
import LocationSearch from './LocationSearch'
import LocationSort from './LocationSort'
import ResetFiltersBtn from './ResetFiltersBtn'

export default function LocationFilters() {
    return (
      <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 space-y-3 sm:space-y-0 w-full max-w-3xl bg-card p-4 rounded-lg shadow-sm">
        <LocationSearch />
        <LocationSort />
        <ResetFiltersBtn />
      </div>
    );
  }

