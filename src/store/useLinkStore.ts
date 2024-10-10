import { create } from "zustand";
import { type Link } from "@/lib/types";

type LinkStore = {
  links: Link[];
  reorderLinks: (links: Link[]) => void;
};

export const useLinkStore = create<LinkStore>((set) => ({
  links: [
    { id: "1", platform: "GitHub", url: "https://www.github.com/benwright" },
  ],
  reorderLinks: (newLinks) => set({ links: newLinks }),
}));
