import { create } from "zustand";

export const useWalletStore = create((set) => {
  return {
    wallet: {
      balance: 0,
      address: "",
      isConnected: false
    },
    setWallet: (wallet) => set(() => ({
      wallet: {
        ...wallet
      }
    })),
  };
}); 
