import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function UniSatWalletSdk() {
  useEffect(() => {
    async function load() {
      try {

        if (typeof window.unisat !== 'undefined') {
          console.log('UniSat Wallet is installed!');
          const account = await unisat.requestAccounts()
          let bal = await window.unisat.getBalance();
          console.log(account, bal)
        }
      } catch (e) {
        console.log(e)

      }
    }
    load()
  }, [])




  return <Box></Box>
}
