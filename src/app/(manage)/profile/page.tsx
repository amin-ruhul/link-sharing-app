import React from "react";
import ProfileForm from "./ProfileForm";

function ProfilePage() {
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-[6px]">Profile Details</h1>
      <p className="text-grey mb-6">
        Add your details to create a personal touch to your profile.
      </p>
      <ProfileForm />
    </div>
  );
}

export default ProfilePage;
