import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useLocation, useNavigate, } from "react-router";


import BNB from '@/assets/exchange_logos/binance.png'

import WalletMenu from "@/components/common/WalletMenu/WalletMenu";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";


export default function WalletMenuDropDown() {

  const { address, balance, isConnected, connectWallet, disconnect } = useWallet()
  const { credits } = useCredits({ isConnected, address })

  const path = useLocation()
  const navigate = useNavigate()

  function addressStrip() {
    return (
      address.substring(0, 4) +
      "...." +
      address.substring(address.length - 4, address.length)
    );
  }
  const addressStripped = addressStrip();

  const menuBalance = {
    key: "Bal",
    value: `${balance} BNB`,
    credits: credits
  }

  const menuButtons = [
    {
      key: `Disconnect`,
      fn: () => disconnect()
    }
  ]


  let routeComponent = null
  if (path.pathname === '/') routeComponent = (
    <Box
      minW="160px"
      boxShadow={"lg"}
      fontWeight={"bolder"}
      borderRadius={"lg"}
      className="btn btn-1"
      onClick={() => navigate("/dapp")}
    >
      Launch Dapp
    </Box>
  )
  if (path.pathname.includes('/dapp')) {
    let component = null;
    if (!isConnected)
      component = <Box borderRadius={"lg"} boxShadow={"lg"} fontWeight={"bold"} className="btn btn-1" onClick={connectWallet}>Connect Wallet</Box>
    else
      component = (
        <CCard type="s" props={{
          cursor: "pointer",
          minW: "200px",
          bgImage: "linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);",
          outline: "none",
          border: 'none',
          boxShadow: "sm",
          border: "2px",
          borderColor: "white",
          _hover: {
            bg: "white",
          }

        }} >
          <Flex py={2} px={3} alignItems={"center"} columnGap={"1rem"}>
            <Image borderRadius={"xl"} maxW={8} src={BNB} />
            <Box>
              <CText size={3} title={`Connected To`} />
              <CText cprops={{ fontWeight: "600" }} size={3} title={addressStripped.toString()} />
            </Box>
          </Flex>
        </CCard>
      )
    routeComponent = component
  }


  return (
    <Popover trigger="click" boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Box>
          {routeComponent}
        </Box>
      </PopoverTrigger>
      <PopoverArrow />
      {isConnected && <PopoverContent border={"none"} outline="none" borderRadius={"lg"} boxShadow={"lg"} maxW="200px">
        <WalletMenu menuButtons={menuButtons} menuBalance={menuBalance} />
      </PopoverContent>
      }
    </Popover>
  );
}

