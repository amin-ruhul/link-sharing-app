import React from "react";
import AddLinkForm from "./AddLinkForm";

function page() {
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-[6px]">Customize your links</h1>
      <p className="text-gray mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <AddLinkForm />
    </div>
  );
}

export default page;
