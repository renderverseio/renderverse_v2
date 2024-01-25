import { useWeb3Modal } from "@web3modal/react";

// import { useEffect } from "react"
// import { useWalletStore } from "@/store/useWalletStore"
//
import { useAccount, useBalance, useDisconnect, } from "wagmi";

export const useWallet = () => {

  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect()

  // const { setWallet } = useWalletStore((state) => state)


  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  // useEffect(() => {
  //   if (address && isConnected && balanceFeteched) {
  //     const b = balance.formatted || 0
  //     setWallet({ balance: b, address, isConnected })
  //   }
  // }, [isConnected])

  return {
    connectWallet, address: balanceFeteched ? address : "", isConnected, balance: balanceFeteched ? balance.formatted : 0, disconnect
  }

}
