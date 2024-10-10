"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChangeEvent, useEffect } from "react";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "@/lib/schema";
import { z } from "zod";

import { useProfileInfo } from "@/store/useProfileInfo";
import toast from "react-hot-toast";

interface ProfileImage {
  image: File | null;
  url: string | null;
  error: string | null;
}

type FormData = z.infer<typeof ProfileSchema>;

function ProfileForm() {
  const { profileData } = useProfileInfo();
  const updateProfileData = useProfileInfo((state) => state.updateProfileData);
  const updateProfileAvatar = useProfileInfo(
    (state) => state.updateProfileAvatar
  );

  const [profileImage, setProfileImage] = useState<ProfileImage>({
    image: null,
    url: profileData?.avatar || "",
    error: null,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: profileData,
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    const subscription = watch((value) => {
      updateProfileData(value as FormData);
    });

    return () => subscription.unsubscribe();
  }, []);

  function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const image = event.target.files?.[0];

    if (!image) return;

    const acceptedType = ["image/jpg", "image/png", "image/jpeg"];
    const isAcceptedType = acceptedType.includes(image.type);
    const isWithinSizeLimit = image.size <= 15 * 1024 * 1024;

    if (!isAcceptedType) {
      return setProfileImage({
        image: null,
        url: null,
        error: "Image type must be JPG, JPEG, or PNG format",
      });
    } else if (!isWithinSizeLimit) {
      return setProfileImage({
        image: null,
        url: null,
        error: "Image must be less than 15MB in size",
      });
    }

    const url = URL.createObjectURL(image);

    setProfileImage({
      image,
      url,
      error: null,
    });
    updateProfileAvatar(url);
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    toast.success("Profile details updated successfully");
  };

  return (
    <form
      className="flex flex-col gap-y-6  w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 bg-gray-light rounded-xl">
        <span className="text-gray min-w-[30%]">Profile picture</span>
        <div className="flex flex-col md:flex-row gap-y-6 flex-1 md:items-center md:gap-x-6">
          <label className="relative w-32 h-32 rounded-lg overflow-hidden group border ">
            {profileImage.url && (
              <Image
                src={profileImage.url}
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="bg-gray-200"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">
                  {profileImage.url ? "Change Image" : "Upload Image"}
                </span>
              </div>
            </div>
            <input
              id="profile-picture"
              type="file"
              className="hidden"
              accept="image/jpg,image/png,image/jpeg"
              onChange={handleImageUpload}
            />
          </label>

          <span className="max-w-72 text-gray">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 p-5 bg-gray-light rounded-lg">
        <Input
          label="First name* "
          placeholder="Enter first name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last name* "
          placeholder="Enter first name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          label="Email "
          placeholder="Enter email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <hr className="border-t border-gray-border my-4 lg:my-6" />

      <div className="flex md:justify-end ">
        <Button type="submit" block className="lg:w-auto">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;
