"use client";

import React from "react";
import { platformIcons } from "@/constants/platform-links";
import PreviewLink from "./PreviewLink";
import { useProfileInfo } from "@/store/useProfileInfo";

type Link = {
  id: string;
  platform: string;
  url: string;
};

function PreviewPhone({ links }: { links: Link[] }) {
  const profileData = useProfileInfo((state) => state.profileData);

  return (
    <div className="lg:w-[65%] border-2 border-gray-300 rounded-[40px] p-4  aspect-[9/16]  bg-white">
      <div className="w-full h-full border-2 rounded-[38px] relative p-4">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>

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

        <div className="space-y-4">
          {links.map((link, idx) => {
            return (
              <PreviewLink key={idx} url={link.url} platform={link.platform} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PreviewPhone;
