"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link as LinkIcon, GripVertical } from "lucide-react";
import { Control, useController, FieldErrors } from "react-hook-form";

import Input from "@/components/ui/Input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { type Link } from "@/lib/types";
import { PLATFORM_LINKS } from "@/constants/platform-links";
import { type Platform } from "@/lib/types";

type SortableLinkProps = {
  link: Link;
  index: number;
  control: Control<{ links: Link[] }>;
  errors: FieldErrors<{ links: Link[] }>;
  remove: (index: number) => void;
};

function SortableLink({
  link,
  index,
  control,
  errors,
  remove,
}: SortableLinkProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: link.id });

  const { field: platformField } = useController({
    name: `links.${index}.platform`,
    control,
    rules: { required: "Platform is required" },
  });

  const validateUrl = (url: string, platform: Platform): string | boolean => {
    const urlPatterns: Record<Platform, RegExp> = {
      github: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
      youtube:
        /^https?:\/\/(www\.)?(youtube\.com\/(@)?[a-zA-Z0-9_-]+|youtu\.be\/[a-zA-Z0-9_-]+)\/?$/,
      linkedin:
        /^https?:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9_-]+\/?$/,
      twitter: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
      facebook: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?$/,
    };

    if (!url) return "URL is required";

    if (!urlPatterns[platform].test(url))
      return `Invalid ${platform} URL format`;

    return true;
  };

  const { field: urlField } = useController({
    name: `links.${index}.url`,
    control,
    rules: {
      validate: (value) => validateUrl(value, platformField.value as Platform),
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePlatformChange = (value: Platform) => {
    platformField.onChange(value);
    urlField.onChange("");
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="mb-6 p-4 bg-gray-light rounded-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div {...listeners} className="cursor-move">
            <GripVertical className="w-5 h-5 text-gray-400 mr-2" />
          </div>
          <h2 className="text-lg font-semibold text-gray-700">
            Link #{index + 1}
          </h2>
        </div>
        <button
          onClick={() => remove(index)}
          className="text-gray-500 hover:text-gray-700"
          type="button"
        >
          Remove
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor={`platform-${link.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Platform
          </label>
          <Select
            onValueChange={handlePlatformChange}
            defaultValue={platformField.value}
          >
            <SelectTrigger id={`platform-${link.id}`} className="w-full mt-1">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              {PLATFORM_LINKS.map((platform) => {
                const Icon = platform.icon;

                return (
                  <SelectItem key={platform.value} value={platform.value}>
                    <div className="flex items-center space-x-2 cursor-pointer w-full">
                      <Icon className="w-4 h-4" />
                      <p> {platform.name}</p>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {errors.links?.[index]?.platform && (
            <p className="mt-1 text-sm text-red">
              {errors.links[index]?.platform?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor={`link-${link.id}`}
            className="text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute  left-0 pl-3 flex items-center pointer-events-none">
              <LinkIcon className="h-5 w-5 text-gray-900" />
            </div>
            <Input
              id={`link-${link.id}`}
              className={`pl-10 ${
                errors.links?.[index]?.url ? "border-red-500" : ""
              }`}
              placeholder={`https://www.${platformField.value?.toLowerCase()}.com/yourusername`}
              {...urlField}
              icon={<LinkIcon className="h-5 w-5 text-gray-900" />}
            />
          </div>
          {errors.links?.[index]?.url && (
            <p className="mt-1 text-sm text-red">
              {errors.links[index]?.url?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SortableLink;
