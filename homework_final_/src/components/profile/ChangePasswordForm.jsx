import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"
import { changePasswordSchema } from "../../schemas/profileSchemas"
import { useChangePassword } from "../../hooks/useChangePassword"


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

export default function ChangePasswordForm() {
  const changePasswordMutation = useChangePassword()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data) => {
    changePasswordMutation.mutate(data, {
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <div className="space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="w-full max-w-2xl space-y-8 rounded-lg border bg-card p-8 shadow-sm">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <FormField
            id="currentPassword"
            label="Current password"
            type="password"
            placeholder="••••••••"
            register={register("currentPassword")}
            error={errors.currentPassword}
          />

          <FormField
            id="newPassword"
            label="New password"
            type="password"
            placeholder="••••••••"
            register={register("newPassword")}
            error={errors.newPassword}
          />

          <FormField
            id="confirmPassword"
            label="Confirm password"
            type="password"
            placeholder="••••••••"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />

          {changePasswordMutation.isError && (
            <p className="text-sm text-red-500">
              {changePasswordMutation.error.message}
            </p>
          )}


          {changePasswordMutation.isSuccess && (
            <div className="flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Password changed successfully
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={changePasswordMutation.isPending}
          >
            {changePasswordMutation.isPending ? "Changing..." : "Change password"}
          </Button>
        </form>
      </div>
      </div>

  )
}
