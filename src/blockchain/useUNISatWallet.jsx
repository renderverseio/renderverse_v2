import { useWalletStore } from "./useWalletStore";

export default function useUNISatWallet() {
  const { setWallet } = useWalletStore((state) => state);

  async function connectWallet() {
    try {
      let address = await window.unisat.requestAccounts();
      address = address[0];
      let balance = await window.unisat.getBalance();
      const isConnected = true;
      setWallet({ address, balance, isConnected });
    } catch (error) {
      console.log(error);
    }
  }

  async function sendBitcoin(address) {
    try {
      let txid = await window.unisat.sendBitcoin(address, 1);
      console.log(txid);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnect() {
    window.location.reload();
  }

  return {
    connectWallet,
    disconnect,
    sendBitcoin,
  };
}
