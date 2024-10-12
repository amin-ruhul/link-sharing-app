import { z } from "zod";

export const ProfileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email format" })
    .or(z.literal("")),
  avatar: z.string().optional(),
});

export const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, { message: "Username must contain at least 4 characters" })
    .max(40, { message: "Username must contain at most 40 characters" }),
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "password must be at least 8 characters" })
    .max(40, { message: "password must be at most 40 characters" }),
});
