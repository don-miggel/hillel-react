import React from 'react'
import { Link, useLoaderData } from 'react-router'
import LocationList from '../components/locations/LocationList';


export default function MapRoute() {

   const locations = useLoaderData(); 

  return (
    <>
    <h3>Map Route Title</h3>
    <LocationList />
    </>
  )
}
