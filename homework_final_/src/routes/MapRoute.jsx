import React from 'react'
import LocationList from '../components/locations/LocationList';
import LocationFilters from '@/components/locations/LocationFilters';


export default function MapRoute() {


  return (
    <>
    <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
      Map Route Title
    </h3>
    <LocationFilters />
    <LocationList />
    </>
  )
}
