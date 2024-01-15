import { create } from "zustand"

type AccessTokenStoreType = {
  accessToken: string;
  setAccess: (token: string) => void;
  clearAccess: () => void;
}

export const useAccessTokenStore = create<AccessTokenStoreType>()((set) => ({
accessToken: "",
setAccess: (token) => set(() => ({ accessToken:  `Bearer ${token}`})),
clearAccess: () => set((state) => ({ accessToken: ""}) )
}))