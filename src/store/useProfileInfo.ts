import { create } from "zustand";
import { type ProfileData } from "@/lib/types";

type ProfileInfoStore = {
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
  updateProfileAvatar: (url: string) => void;
};

export const useProfileInfo = create<ProfileInfoStore>((set) => ({
  profileData: {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  },

  updateProfileData: (data) => {
    set((state) => ({
      profileData: { ...state.profileData, ...data },
    }));
  },

  updateProfileAvatar: (data) => {
    set((state) => ({
      profileData: { ...state.profileData, avatar: data },
    }));
  },
}));
