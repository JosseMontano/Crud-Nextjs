import { z, ZodError } from "zod";

export const UserSchema = z.object({
    name: z.string().min(5, "Name is required"),
    salary: z.number(),
  });
  