import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from '@/schemas/authSchemas';
import { Link } from 'react-router';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button.jsx';
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
      <>

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
      </>

  )
}