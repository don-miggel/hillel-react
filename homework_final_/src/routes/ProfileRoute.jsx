import ChangePasswordForm from '@/components/profile/ChangePasswordForm'
import EditProfileForm from '@/components/profile/EditProfileForm'
import React from 'react'

export default function ProfileRoute() {
  return (
    <div className="flex flex-col w-full px-8 py-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Profile</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Manage your personal information
      </p>

      <div className="space-y-8 max-w-3xl">
        <EditProfileForm />
        <ChangePasswordForm />
      </div>
    </div>
  );
}
