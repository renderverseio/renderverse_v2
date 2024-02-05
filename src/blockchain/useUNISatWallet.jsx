import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function useUNISatWallet() {

  const [account, setAccount] = useState({
    address: "",
    balance: {
      confirmed: 0,
      unconfirmed: 0,
      total: 0
    }
  })

  async function sendBitcoin(address) {
    try {
      let txid = await window.unisat.sendBitcoin(address, 1);
      console.log(txid)
    } catch (e) {
      console.log(e);
    }
  }

  async function connectUNISatWallet() {
    try {
      if (typeof window.unisat !== 'undefined') {
        console.log('UniSat Wallet is installed!');
        const address = await unisat.requestAccounts()
        let bal = await window.unisat.getBalance();
        setAccount({
          address: address,
          balance: bal
        })
      }
    } catch (e) {
      console.log(e)
    }
  }


  return {
    connectUNISatWallet,
    sendBitcoin,
    account
  }


}
