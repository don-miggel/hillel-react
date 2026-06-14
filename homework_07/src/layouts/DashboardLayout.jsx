import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header';
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}
