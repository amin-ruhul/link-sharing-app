import { create } from "zustand";
import { type ProfileData } from "@/lib/types";

type ProfileInfoStore = {
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
};

export const useProfileInfo = create<ProfileInfoStore>((set) => ({
  profileData: {
    firstName: "",
    lastName: "",
    email: "",
  },

  updateProfileData: (data) => {
    set((state) => ({
      profileData: { ...state.profileData, ...data },
    }));
  },
}));
