export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
};

export type Link = {
  id: string;
  platform: string;
  url: string;
};

export type Platform =
  | "github"
  | "youtube"
  | "linkedin"
  | "twitter"
  | "facebook";
