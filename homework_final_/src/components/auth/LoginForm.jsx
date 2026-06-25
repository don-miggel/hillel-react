import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/schemas/authSchemas"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useLogin } from "../../hooks/useLogin"
import { Link } from "react-router"


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

export default function LoginForm() {

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <FormField
          id="email"
          label="Email"
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

        <Button
          type="submit"
          className="w-full"
        >
          Log in
        </Button>
        

      </form>
      <p className="text-center text-sm text-muted-foreground">
      Do not have an account?{" "}
      <Button asChild variant="link" className="px-0">
        <Link to="/register">Sign up</Link>
      </Button>
    </p>
  </>
  );
}