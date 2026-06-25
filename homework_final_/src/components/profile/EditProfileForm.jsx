import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { profileSchema } from "../../schemas/profileSchemas";
import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
);

export default function EditProfileForm() {
  const { data: profile, isLoading, isError } = useProfile();
  const updateProfileMutation = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  console.log(profile, "prof")

  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
      });
    }
  }, [profile, reset]);

  const onSubmit = (data) => {
    updateProfileMutation.mutate(data);
  };

  const handleInputChange = () => {
    if (updateProfileMutation.isSuccess || updateProfileMutation.isError) {
      updateProfileMutation.reset();
    }
  };

  if (isLoading)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading profile...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-red-500">Failed to load profile</p>
      </div>
    );

  return (
    <div className="space-y-8 rounded-lg border bg-card p-8 shadow-sm">

 
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center text-white justify-center rounded-full bg-primary text-card-foreground text-xl font-semibold">
            {profile?.name
              && profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
              }
          </div>
          <div>
            <h3 className="text-xl font-semibold">{profile.name }</h3>
            <p className="text-sm text-muted-foreground">{profile.email }</p>
            <p className="text-sm text-muted-foreground">{profile.phone }</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-medium">Edit Profile</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              id="name"
              label="Full name"
              placeholder="John Doe"
              register={register("name", { onChange: handleInputChange })}
              error={errors.name}
            />

            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="john@example.com"
              register={register("email", { onChange: handleInputChange })}
              error={errors.email}
            />

            <FormField
              id="phone"
              label="Phone"
              type="tel"
              register={register("phone", { onChange: handleInputChange })}
              error={errors.phone}
            />

            {updateProfileMutation.isError && (
              <p className="text-sm text-red-500">
                {updateProfileMutation.error.message}
              </p>
            )}

            {updateProfileMutation.isSuccess && (
              <div className="flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Profile updated successfully
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={updateProfileMutation.isPending}
            >
              {updateProfileMutation.isPending ? "Saving..." : "Save changes"}
            </Button>
          </form>
        </div>
    </div>
  );
}