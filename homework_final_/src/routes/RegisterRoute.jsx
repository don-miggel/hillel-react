import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'

export default function RegisterRoute() {
  return (
    <div className="w-full max-w-md space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Create account
        </h2>

        <p className="text-muted-foreground">
          Register a new account
        </p>
      </div>

      <RegisterForm />

    </div>
  );
}
