"use client";

import React from "react";
import Image from "next/image";
import PreviewNav from "@/components/PreviewNav";
import PreviewLink from "@/components/PreviewLink";
import { useLinkStore } from "@/store/useLinkStore";
import { useProfileInfo } from "@/store/useProfileInfo";

function SharePage() {
  const { links } = useLinkStore();
  const { profileData } = useProfileInfo();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white md:bg-transparent">
      <div className="hidden md:block absolute top-0 left-0 w-full bg-primary h-[357px] -z-10 rounded-b-[32px]"></div>

      {/* TODO: preview nav only visible for owner */}
      <PreviewNav />

      <div className="w-60 flex flex-col gap-y-14 md:w-[350px] md:bg-white md:px-14 md:py-12 md:rounded-3xl md:shadow-box">
        <div className="flex flex-col items-center gap-y-[25px]">
          {profileData.avatar ? (
            <Image
              alt="user"
              src={profileData.avatar}
              width={100}
              height={100}
              className="border-4 border-primary rounded-full object-cover aspect-square"
            ></Image>
          ) : (
            <div className="h-[6.25rem] w-[6.25rem] bg-gray-200 rounded-full border-4 border-primary"></div>
          )}

          <div className=" w-full text-center flex flex-col gap-y-2">
            <p className="heading-m">
              {profileData.firstName} {profileData.lastName}
            </p>

            <p className="body-m text-gray">{profileData.email}</p>
          </div>
        </div>

        <div className="space-y-2 flex flex-col">
          {links.map((link) => {
            return (
              <PreviewLink
                key={link.id}
                url={link.url}
                platform={link.platform}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SharePage;
