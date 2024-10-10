import { ProfileSchema } from "./schema";
import { z } from "zod";

export type ProfileData = z.infer<typeof ProfileSchema>;
