import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

function RegisterForm() {
  return (
    <form className="flex flex-col gap-y-6 w-full bg-white p-6 rounded-md shadow">
      <h2 className=" text-center text-xl font-semibold">Register</h2>
      <Input label="Email address" placeholder="Enter email address" />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Input
        label="Confirm Password"
        placeholder="Enter your password again"
        type="password"
      />
      <Button block type="submit">
        Register
      </Button>
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
