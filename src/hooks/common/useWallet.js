import { bsc } from "viem/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect, } from "wagmi";

export const useWallet = () => {

  const { address, isConnected, } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { disconnect } = useDisconnect()

  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }
  return {
    isConnected: isConnected ? isConnected : false,
    balance: balanceFeteched ? balance.formatted : 0,
    address: balanceFeteched ? address : "",
    disconnect,
    connectWallet,
  }

}
