import React from "react";
import NavLink from "./NavLink";
import Button from "../ui/Button";
import Link from "next/link";

import { Link2, User2, Eye, Link as LinkIcon } from "lucide-react";

function NavBar() {
  return (
    <header className="h-20 bg-white rounded-xl px-6 py-4 flex items-center justify-between shadow">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <Link2 />
        </div>
        <span className="text-2xl font-bold text-gray-800 hidden md:block">
          devlinks
        </span>
      </div>

      <div className="flex items-center desktop:gap-x-4 font-semibold">
        <NavLink href="/links">
          <div className=" flex items-center space-x-2">
            <LinkIcon className="w-5 h-5" />
            <p className="hidden md:block">Links</p>
          </div>
        </NavLink>
        <NavLink href="/profile">
          <div className=" flex items-center space-x-2">
            <User2 className="w-5 h-5" />
            <p className="hidden md:block">Profile Details</p>
          </div>
        </NavLink>
      </div>

      <div>
        <Button asChild variant="secondary" className="py-3 px-4 md:px-7">
          <Link href={`/preview`}>
            <span className="md:hidden">
              <Eye className="w-5 h-5" />
            </span>
            <span className="hidden md:block font-semibold">Preview</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default NavBar;
