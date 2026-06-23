import { z } from "zod"

export const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email(),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
});

export const changePasswordSchema = z.object({

    currentPassword: z.string().min(6),
    newPassword: z.string().min(6),
    confirmPassword: z.string().min(6),
    
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
  