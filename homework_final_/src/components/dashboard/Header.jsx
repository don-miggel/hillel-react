import React from 'react'
import { useAuthStore } from '../../store/authStore'

export default function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <header className="flex items-center justify-end border-b bg-card px-6 py-3 shadow-sm">
      {isAuthenticated && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
            {user?.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
          <span className="text-sm font-medium">{user?.name}</span>
        </div>
      )}
    </header>
  );
}