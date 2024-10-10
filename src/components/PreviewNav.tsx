"use client";

import Link from "next/link";
import Button from "./ui/Button";
import toast from "react-hot-toast";

const PreviewNav = () => {
  const handleClipboard = () => {
    const url = window.location.toString();
    navigator.clipboard.writeText(url);

    toast.success(`Copied ${url}`);
  };

  return (
    <div className="absolute top-0 left-0 w-full p-4 md:p-6">
      <div className="flex gap-x-4 justify-between md:py-4 md:px-6 md:bg-white md:rounded-xl ">
        <Button asChild variant="secondary">
          <Link href="/links">Back to Editor</Link>
        </Button>
        <Button onClick={handleClipboard}>Share Link</Button>
      </div>
    </div>
  );
};

export default PreviewNav;
