import React from 'react'
import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router';

export default function HomeRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? (
    <Navigate to={"/dashboard/map"} />
  ) : (
    <Navigate to={"/login"} />
  );
}
