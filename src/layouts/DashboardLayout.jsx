import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header';
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
