import React from 'react'
import { Outlet } from "react-router";
import { MapPin, Truck } from "lucide-react"

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen">

      <div className="relative hidden md:flex flex-1 flex-col items-center justify-center gap-6 bg-gradient-to-br from-blue-600 to-blue-900 p-12 text-center text-white">

        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
            <MapPin className="h-5 w-5" />
          </div>

          <div className="text-left">
            <div className="text-xs opacity-80">
              Logistics
            </div>

            <div className="text-base font-bold">
              Dashboard
            </div>
          </div>
        </div>

        <Truck className="h-24 w-24" />

        <div>
          <h1 className="text-3xl font-bold">
            Welcome back!
          </h1>

          <p>
            Manage your logistics network.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background p-6">
        <Outlet />
      </div>

    </div>
  );
}