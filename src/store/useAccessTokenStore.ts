import { set } from "react-hook-form";
import { create } from "zustand"

export type ObjectTokenList = {
  paas: string;
  caas: string;
}

export enum ContextEnum {
  PAAS = "paas",
  CAAS = "caas"
}

type AccessTokenStoreType = {
  accessTokenList: ObjectTokenList;
  setAccess: (token: string, ctx: ContextEnum) => void;
}

export const useAccessTokenStore = create<AccessTokenStoreType>()((set) => ({
accessTokenList: {paas: "", caas: ""},
setAccess: (token, ctx) => set((state) => ({accessTokenList: ctx === ContextEnum.PAAS ? {...state.accessTokenList, paas: `Bearer ${token}`} : {...state.accessTokenList, caas: `Bearer ${token}`}})),
}))