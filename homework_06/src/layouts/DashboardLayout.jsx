import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <>
      < Sidebar/>
      < Outlet/>
    </>
  )
}
