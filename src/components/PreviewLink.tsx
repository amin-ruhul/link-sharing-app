import React from "react";
import { ArrowRight } from "lucide-react";

import { PLATFORM_MAP, PLATFORM_ICON } from "@/constants/platform-links";
import { cn } from "@/lib/utils";

type PreviewLinkProps = {
  platform: string;
  url: string;
};

function PreviewLink({ url, platform }: PreviewLinkProps) {
  const Icon = PLATFORM_ICON[platform as keyof typeof PLATFORM_ICON];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        `w-full flex items-center justify-between px-4 py-3 text-white rounded-lg`,
        { "bg-github": platform === PLATFORM_MAP.github },
        { "bg-facebook": platform === PLATFORM_MAP.facebook },
        { "bg-linkedin": platform === PLATFORM_MAP.linkedin },
        { "bg-twitter": platform === PLATFORM_MAP.twitter },
        { "bg-youtube": platform === PLATFORM_MAP.youtube }
      )}
    >
      <div className="flex items-center">
        {Icon && <Icon />}
        <span className="ml-3 text-sm font-medium">{platform}</span>
      </div>
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

export default PreviewLink;
