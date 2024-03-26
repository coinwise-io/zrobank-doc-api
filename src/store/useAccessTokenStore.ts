import { create } from 'zustand'

export type ObjectTokenList = {
  paas: string
  caas: string
  gateway: string
}

type AccessTokenStoreType = {
  accessTokenList: ObjectTokenList
  setAccess: (token: string, ctx: string) => void
}

export const useAccessTokenStore = create<AccessTokenStoreType>()((set) => ({
  accessTokenList: { paas: '', caas: '', gateway: '' },
  setAccess: (token, ctx) =>
    set((state) => ({
      accessTokenList: {
        ...state.accessTokenList,
        [`${ctx}`]: `Bearer ${token}`,
      },
    })),
}))
