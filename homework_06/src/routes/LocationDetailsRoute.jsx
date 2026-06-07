import React from 'react'
import { useLoaderData } from 'react-router'

export default function LocationDetailsRoute() {

    const location = useLoaderData();
  return (
    <>
        <h1>Location Details Route Title</h1>
    
        <p><b>Name: </b> {location.name}</p>
        <p><b>Address: </b>: {location.address}</p>
        <p><b>Type: </b> {location.type}</p>
        <p><b>Rating: </b>{location.rating}</p>

    </>
  )
}
