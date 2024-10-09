import {Github,Youtube,Linkedin} from "lucide-react"

const PLATFORM_LINKS = [
  {
    name: "Github",
    value: "github",
    backgroundColor: "#1a1a1a",
  },
  {
    name: "Twitter",
    value: "twitter",
    backgroundColor: "#43b7e9",
  },
  {
    name: "Linkedin",
    value: "linkedin",
    backgroundColor: "#2d68ff",
  },
  {
    name: "Youtube",
    value: "youtube",
    backgroundColor: "#ee3939",
  },
  {
    name: "Facebook",
    value: "facebook",
    backgroundColor: "#2442ac",
  },
];


export const platformIcons = {
  GitHub: Github,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

export const platformColors: { [key: string]: string } = {
  GitHub: "bg-black",
  YouTube: "bg-red-600",
  LinkedIn: "bg-blue-600",
};

