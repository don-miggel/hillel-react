import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from '@/schemas/authSchemas';
import { Link } from 'react-router';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button.jsx';
import { MapPin, Truck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRegister } from '../../hooks/useRegister';


const FormField = ({ id, label, type = "text", placeholder, register, error }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className={cn(error && "border-red-500 focus-visible:ring-red-500")}
    />
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
)

export default function RegisterForm() {
  const useRegisterMutation = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues:{
      name: "Dan Doe",
      email:"dan@example.com",
      password: "qwerty"
    }
  })

  const onSubmit = (data) => {
    useRegisterMutation.mutate(data)
  }

  return (
    <div className="flex min-h-screen">

   
      <div className="relative hidden md:flex flex-1 flex-col items-center justify-center gap-6 bg-gradient-to-br from-blue-600 to-blue-900 p-12 text-center text-white">

        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="text-left">
            <div className="text-xs opacity-80">Logistics</div>
            <div className="text-base font-bold">Dashboard</div>
          </div>
        </div>

        <Truck className="h-24 w-24" strokeWidth={1.2} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="max-w-xs text-sm text-blue-100">
            Sign in to your account to continue managing your logistics network.
          </p>
        </div>
      </div>


      <div className="flex flex-1 items-center justify-center bg-background p-6">
        <div className="w-full max-w-md space-y-6">

          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              Create account
            </h3>
            <p className="text-sm text-muted-foreground">
              Fill in the details below to get started
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              id="name"
              label="Name"
              register={register("name")}
              error={errors.name}
            />

            <FormField
              id="email"
              label="Email"
              type="email"
              register={register("email")}
              error={errors.email}
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              register={register("password")}
              error={errors.password}
            />

            {useRegisterMutation.isError && (
              <p className="text-sm text-red-500">
                Error: {useRegisterMutation.error.message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={useRegisterMutation.isPending}
            >
              {useRegisterMutation.isPending ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button asChild variant="link" className="px-0">
              <Link to="/login">Sign in</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}