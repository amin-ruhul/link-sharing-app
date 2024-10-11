"use client";

import React from "react";
import PreviewLink from "./PreviewLink";
import { useProfileInfo } from "@/store/useProfileInfo";
import { useLinkStore } from "@/store/useLinkStore";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function PreviewPhone() {
  const { profileData } = useProfileInfo();
  const { links } = useLinkStore();
  const [parent] = useAutoAnimate();

  return (
    <div className="lg:w-[65%] border-2 border-gray-300 rounded-[40px] p-4  aspect-[9/16]  bg-white">
      <div className="w-full h-full border-2 rounded-[38px] relative p-4">
        <div className="flex flex-col items-center mb-16 space-y-4">
          {profileData.avatar ? (
            <div className=" relative h-[100px] w-[100px] rounded-full">
              <Image
                src={profileData.avatar}
                alt="user-profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
          )}

          {profileData.firstName ? (
            <div className="text-xl font-semibold break-all">
              {profileData.firstName} {profileData.lastName}
            </div>
          ) : (
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          )}

          {profileData.email ? (
            <div className="text-md break-all">{profileData.email}</div>
          ) : (
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
          )}
        </div>

        <div className="space-y-4" ref={parent}>
          {links.length > 0 &&
            links.map((link, idx) => {
              return (
                <PreviewLink
                  key={idx}
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

export default PreviewPhone;
