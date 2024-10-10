import React from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="container mx-auto h-screen">
      <section className="h-full w-[600px] flex justify-center items-center mx-auto">
        <LoginForm />
      </section>
    </div>
  );
}

export default LoginPage;
