import React from "react";
// import { Link } from "lucide-react";
import { platformIcons, platformColors } from "@/constants/platform-links";
import { ArrowRight } from "lucide-react";
import NextLink from "next/link";

type Link = {
  id: string;
  platform: string;
  url: string;
};

function PreviewPhone({ links }: { links: Link[] }) {
  return (
    <div className="lg:w-[65%] border-2 border-gray-300 rounded-[40px] p-4  aspect-[9/16]  bg-white">
      <div className="w-full h-full border-2 rounded-[38px] relative p-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
          <div className="w-32 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
        </div>

        <div className="space-y-2">
          {links.map((link, idx) => {
            const Icon =
              platformIcons[link.platform as keyof typeof platformIcons];
            return (
              <NextLink
                href={link.url}
                className={`w-full flex items-center justify-between px-4 py-3 ${
                  platformColors[link.platform as keyof typeof platformColors]
                } text-white rounded-lg`}
                key={idx}
              >
                <div className="flex items-center">
                  {Icon && <Icon />}
                  <span className="ml-3 text-sm font-medium">
                    {link.platform}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5" />
              </NextLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PreviewPhone;
