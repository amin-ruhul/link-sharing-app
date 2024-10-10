import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

function LoginForm() {
  return (
    <form className="flex flex-col gap-y-6 w-full bg-white p-6 rounded-md shadow">
      <h2 className=" text-center text-xl font-semibold">Login</h2>
      <Input label="Email address" placeholder="Enter email address" />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Button block type="submit">
        Login
      </Button>
      <div className="text-center text-grey">
        <span>Don&apos;t have an account? </span>{" "}
        <Link className="text-primary" href="/register">
          Create account
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
