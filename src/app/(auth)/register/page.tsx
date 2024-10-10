import React from "react";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <div className="container mx-auto h-screen">
      <section className="h-full w-[600px] flex justify-center items-center mx-auto">
        <RegisterForm />
      </section>
    </div>
  );
}

export default RegisterPage;
