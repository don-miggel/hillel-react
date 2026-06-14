import React from 'react'
import { useAuthStore } from '../../store/authStore'

export default function Header() {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    const user = useAuthStore(state=> state.user);

  return (
    <div>
      {isAuthenticated && <p>Logged in user : <b>{user.email}</b></p>}
    </div>
  )
}
