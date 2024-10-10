import { ProfileSchema } from "./schema";
import { z } from "zod";

export type ProfileData = z.infer<typeof ProfileSchema>;

export type Link = {
  id: string;
  platform: string;
  url: string;
};
