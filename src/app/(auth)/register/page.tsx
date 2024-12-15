import React from "react";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <div className="container mx-auto h-screen">
      <section className="h-full max-w-[550px] p-2 flex justify-center items-center mx-auto">
        <RegisterForm />
      </section>
    </div>
  );
}

export default RegisterPage;
