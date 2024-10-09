import React from "react";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";

import { platformColors, platformIcons } from "@/constants/platform-links";

type PreviewLinkProps = {
  platform: string;
  url: string;
};

function PreviewLink({ url, platform }: PreviewLinkProps) {
  const Icon = platformIcons[platform as keyof typeof platformIcons];
  const color = "bg-black";
  return (
    <NextLink
      href={url}
      className={`w-full flex items-center justify-between px-4 py-3 ${color} text-white rounded-lg`}
    >
      <div className="flex items-center">
        {Icon && <Icon />}
        <span className="ml-3 text-sm font-medium">{platform}</span>
      </div>
      <ArrowRight className="w-5 h-5" />
    </NextLink>
  );
}

export default PreviewLink;
