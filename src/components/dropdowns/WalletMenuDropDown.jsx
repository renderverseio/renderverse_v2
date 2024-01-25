
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Button,
  Text,
  Box,
  Image,
  Flex
} from "@chakra-ui/react";

import { useState } from "react";
import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useNavigate } from "react-router";


import BNB from '@/assets/exchange_logos/binance.png'


import WalletMenu from "@/components/common/WalletMenu";

export default function WalletMenuDropDown() {

  const navigate = useNavigate();

  const { address, balance, isConnected, connectWallet, disconnect } = useWallet()
  const { hasCredits, credits } = useCredits({ isConnected, address })

  const [editProfileModalIsOpen, setEditProfileModalIsOpen] = useState(true);
  const [input, setInput] = useState("");

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
      key: `Edit Profile`,
      fn: () => setEditProfileModalIsOpen(true)
    },
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
            <Button size="lg" cursor="pointer" >
              <Flex alignItems={"center"} columnGap={"1rem"}>
                <Image maxW={8} src={BNB} />
                <Box>
                  <Text>
                    Connected To
                  </Text>
                  <Text
                    textAlign={"left"}
                    fontSize="sm"
                  >
                    {addressStripped.toString()}
                  </Text>
                </Box>
              </Flex>

            </Button>
          }
          {!isConnected &&
            <Button onClick={connectWallet}>Connect Wallet</Button>
          }
        </Box>
      </PopoverTrigger>
      <PopoverArrow />
      {isConnected && <PopoverContent>
        <WalletMenu menuButtons={menuButtons} menuBalance={menuBalance} />
      </PopoverContent>
      }
    </Popover>
  );
}

