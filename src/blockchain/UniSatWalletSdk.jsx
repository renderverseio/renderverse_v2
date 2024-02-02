import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function UniSatWalletSdk() {
  useEffect(() => {
    async function load() {
      try {

        // if (typeof window.unisat !== 'undefined') {
        //   console.log('UniSat Wallet is installed!');
        //   const account = await unisat.requestAccounts()
        //   let bal = await window.unisat.getBalance();
        //   const c = await window.unisat.getInscriptions(0, 10)
        //   console.log(account, bal, c)
        //   try {
        //     let { txid } = await window.unisat.sendInscription("tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny", "e9b86a063d78cc8a1ed17d291703bcc95bcd521e087ab0c7f1621c9c607def1ai0", { feeRate: 15 });
        //     console.log("send Inscription 204 to tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny", { txid })
        //   } catch (e) {
        //     console.log(e);
        //   }
        //
        // }
      } catch (e) {
        console.log(e)

      }
    }
    load()
  }, [])





  return <Box></Box>
}
