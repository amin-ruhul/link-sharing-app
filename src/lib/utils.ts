import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodIssue } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function structureError(errorList: ZodIssue[]) {
  const errors = errorList.map((error) => {
    return { field: error.path[0], message: error.message };
  });

  return errors;
}
