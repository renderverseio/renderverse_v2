import { useEffect, useState } from "react";

export default function useUNISatWallet() {


  const [address, setAddress] = useState("")
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: 0
  })
  const [isConnected, setIsConnected] = useState(false)

  async function sendBitcoin(address) {
    try {
      let txid = await window.unisat.sendBitcoin(address, 1);
      console.log(txid)
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnect() {
    window.unisat.requestAccounts()

  }


  useEffect(() => {
    async function fun() {
      try {
        if (!isConnected) {
          console.log('UniSat Wallet is installed!');
          const address = await window.unisat.requestAccounts()
          let bal = await window.unisat.getBalance();
          setAddress(address[0])
          setBalance(bal)
          setIsConnected(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fun()
  }, [isConnected])



  async function connectUNISatWallet() {
    try {
      if (!isConnected) {
        console.log('UniSat Wallet is installed!');
        const address = await window.unisat.requestAccounts()
        let bal = await window.unisat.getBalance();
        setAddress(address[0])
        setBalance(bal)
        setIsConnected(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    connectUNISatWallet,
    sendBitcoin,
    address,
    balance,
    isConnected
  }


}
