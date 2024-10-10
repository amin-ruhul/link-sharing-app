// import { ProfileSchema } from "./schema";
// import { z } from "zod";

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
