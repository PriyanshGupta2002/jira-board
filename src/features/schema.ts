import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().min(2).email("This is not a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const signUpFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2).email("This is not a valid email"),
  password: z.string().min(8, "Password should be atleast 6 characters long"),
});
