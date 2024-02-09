import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Box,
  Flex,
} from "@chakra-ui/react";

import { useCredits } from "@/hooks/common/useCredits";
import { useLocation, useNavigate, } from "react-router";


import WalletMenu from "@/components/common/WalletMenu/WalletMenu";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import useUNISatWallet from "@/blockchain/useUNISatWallet";


export default function WalletMenuDropDown() {
  const { isConnected, address, balance, connectUNISatWallet, sendBitcoin, disconnect } = useUNISatWallet()
  const { credits } = useCredits({ isConnected, address })

  const path = useLocation()
  const navigate = useNavigate()

  function addressStrip() {
    return (
      address.substring(0, 6) +
      "...." +
      address.substring(address.length - 6, address.length)
    );
  }
  const addressStripped = addressStrip();

  const menuBalance = {
    key: "BTC",
    value: `${balance.total / 10 ** 8}`,
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
      component = <Box borderRadius={"lg"} boxShadow={"lg"} fontWeight={"bold"} className="btn btn-1" onClick={connectUNISatWallet}>Connect Wallet</Box>
    else
      component = (
        <CCard type="s"
          props={{
            cursor: "pointer",
            minW: "200px",
            boxShadow: "lg",
            className: 'btn btn-1'
          }}
        >
          <Flex py={2} px={3} alignItems={"center"} columnGap={"1rem"}>
            <Box>
              <CText cprops={{ textAlign: "left" }} size={3} title={`Connected To`} />
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

