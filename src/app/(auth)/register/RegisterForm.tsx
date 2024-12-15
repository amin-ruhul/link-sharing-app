"use client";

import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { userSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormData } from "@/lib/types";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-y-4 w-full bg-white p-6 rounded-md shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center text-2xl font-semibold my-2">
        Create an account
      </h2>

      <div className="flex flex-col md:flex-row gap-y-2 gap-x-4">
        <Input
          placeholder="Enter your first name"
          type="text"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          placeholder="Enter your last name"
          type="text"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
      </div>

      <Input
        placeholder="Enter email address"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        placeholder="Enter your password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        placeholder="Enter your password again"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <div className="flex justify-end">
        <Button type="submit">Register</Button>
      </div>
      <div className="text-center text-grey">
        <span>Already have an account? </span>
        <Link className="text-primary" href="/login">
          login
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
