import React from 'react'
import { NavLink } from 'react-router'
import LogoutForm from '../auth/LogoutButton';
import { Map, BarChart2, Star, User, MapPin } from "lucide-react";

export default function Sidebar() {
  return (
    <aside bg-gray-50 className="w-56 border-r bg-card p-4 shadow-sm flex flex-col ">
      <div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black">
          <MapPin className="h-4 w-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-muted-foreground">Logistics</span>
          <h1 className="text-base font-semibold tracking-tight">Dashboard</h1>
        </div>
      </div>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard/map"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-foreground hover:bg-blue-50"
              }`
            }
          >
            <Map className="h-4 w-4" /> Map
          </NavLink>

          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-foreground hover:bg-blue-50"
              }`
            }
          >
            <BarChart2 className="h-4 w-4" /> Analytics
          </NavLink>

          <NavLink
            to="/dashboard/favorites"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-foreground hover:bg-blue-50"
              }`
            }
          >
            <Star className="h-4 w-4" /> Favorites
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-foreground hover:bg-blue-50"
              }`
            }
          >
            <User className="h-4 w-4" /> Profile
          </NavLink>
        </nav>
      </div>

      <div className="mt-6">
        <LogoutForm />
      </div>
    </aside>
  );
}
