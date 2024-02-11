import { create } from 'zustand'

export const useWalletStore = create((set) => ({
  wallet: {
    isConnected: false,
    address: "",
    balance: {
      total: 0,
      confirmed: 0,
      unconfirmed: 0
    }
  },
  setWallet: ({ address, balance, isConnected }) => set(() => ({
    wallet: {
      isConnected,
      address,
      balance
    }
  })),
}))

