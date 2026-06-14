import React from 'react'
import { NavLink } from 'react-router'
import LogoutForm from '../auth/LogoutButton'

export default function Sidebar() {
  return (<>
    <nav>
    <ul>
      <li>
        <NavLink to={"/dashboard/map"}>
          Map
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/analytics"} >
          Analytics
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/favorites"} >
        Favorites
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/profile"} >
        Profile
        </NavLink>
      </li>
    </ul>
  </nav>
  <hr />
  <LogoutForm />
  </>
  )
}
