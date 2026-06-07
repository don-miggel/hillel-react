import React from 'react'
import { Link, useLoaderData } from 'react-router'


export default function MapRoute() {

   const locations = useLoaderData(); 

  return (
    <>
    <h1>Map Route Title</h1>
        <ul>{locations.map(loc =>
            <li key={loc.id}>
                <p><b>Name:</b> {loc.name}</p>
                <p><b>Address:</b> {loc.address}</p>
                <p><b>Type:</b> {loc.type}</p>
                <Link to={`../location/${loc.id}`} >View Details</Link>
                <hr />
            </li>
        )
            }
        </ul>
    </>
  )
}
