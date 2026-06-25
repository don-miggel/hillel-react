import React from 'react'
import LoginForm from '../components/auth/LoginForm'

export default function LoginRoute() {
  return (
    <div className="w-full max-w-md space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Sign in
        </h2>

        <p className="text-muted-foreground">
          Enter your credentials
        </p>
      </div>

      <LoginForm />

    </div>
  );
}