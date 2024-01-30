
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Button,
  Box,
  Image,
  Flex
} from "@chakra-ui/react";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useNavigate } from "react-router";


import BNB from '@/assets/exchange_logos/binance.png'

import WalletMenu from "@/components/common/WalletMenu/WalletMenu";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

export default function WalletMenuDropDown() {

  const navigate = useNavigate();

  const { address, balance, isConnected, connectWallet, disconnect } = useWallet()
  const { credits } = useCredits({ isConnected, address })

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
      key: `Spaces`,
      fn: () => navigate("/spaces")
    },
    {
      key: `Models`,
      fn: () => navigate("/models")
    },
    // {
    //   key: `Edit Profile`,
    //   fn: () => setEditProfileModalIsOpen(true)
    // },
    {
      key: `Disconnect`,
      fn: () => disconnect()
    }

  ]

  return (
    <Popover trigger="click" boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Box>
          {isConnected &&
            <CCard type="d" props={{ cursor: "pointer", minW: "200px" }} >
              <Flex py={2} px={3} alignItems={"center"} columnGap={"1rem"}>
                <Image maxW={8} src={BNB} />
                <Box>
                  <CText size={3} title={`Connected To`} />
                  <CText cprops={{ fontWeight: "600" }} size={3} title={addressStripped.toString()} />
                </Box>
              </Flex>
            </CCard>
          }
          {!isConnected && <Button onClick={connectWallet}>Connect Wallet</Button>}
        </Box>
      </PopoverTrigger>
      <PopoverArrow />
      {isConnected && <PopoverContent maxW="200px">
        <WalletMenu menuButtons={menuButtons} menuBalance={menuBalance} />
      </PopoverContent>
      }
    </Popover>
  );
}

