import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Box,
  Flex,
} from "@chakra-ui/react";

import { useCredits } from "@/hooks/common/useCredits";
import { useLocation, useNavigate } from "react-router";

import WalletMenu from "@/components/common/WalletMenu/WalletMenu";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import useUNISatWallet from "@/blockchain/useUNISatWallet";
import { useWalletStore } from "@/blockchain/useWalletStore";

export default function WalletMenuDropDown() {
  const { connectWallet, sendBitcoin, disconnect } = useUNISatWallet();

  const { wallet } = useWalletStore((state) => state);
  const { isConnected, address, balance } = wallet;

  const { credits } = useCredits({ isConnected, address });

  const path = useLocation();
  const navigate = useNavigate();

  function addressStrip() {
    if (!address) return "";
    const _address = address;
    return (
      _address.substring(0, 6) +
      "...." +
      _address.substring(_address.length - 6, _address.length)
    );
  }
  const addressStripped = addressStrip();

  const menuBalance = {
    key: "BTC",
    value: `${balance.total / 10 ** 8}`,
    credits: credits,
  };

  const menuButtons = [
    {
      key: `Disconnect`,
      fn: () => disconnect(),
    },
  ];

  let routeComponent = null;
  if (path.pathname === "/")
    routeComponent = (
      <Box
        minW="160px"
        boxShadow={"lg"}
        fontWeight={"bolder"}
        borderRadius={"lg"}
        className="btn btn-1"
        onClick={() => navigate("/dapp")}
        p={3}
      >
        Launch Dapp
      </Box>
    );
  if (path.pathname.includes("/dapp")) {
    let component = null;
    if (!isConnected)
      component = (
        <Box
          p={3}
          borderRadius={"lg"}
          boxShadow={"lg"}
          fontWeight={"bold"}
          className="btn btn-1"
          onClick={connectWallet}
        >
          Connect Wallet
        </Box>
      );
    else
      component = (
        <CCard
          type="s"
          props={{
            cursor: "pointer",
            minW: "200px",
            boxShadow: "lg",
            className: "btn btn-1",
          }}
        >
          <Flex py={2} px={3} alignItems={"center"} columnGap={"1rem"}>
            <Box>
              <CText
                cprops={{ textAlign: "left" }}
                size={3}
                title={`Connected To`}
              />
              <CText
                cprops={{ fontWeight: "600" }}
                size={3}
                title={addressStripped.toString()}
              />
            </Box>
          </Flex>
        </CCard>
      );
    routeComponent = component;
  }

  return (
    <Popover trigger="click" boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Box>{routeComponent}</Box>
      </PopoverTrigger>
      <PopoverArrow />
      {isConnected && (
        <PopoverContent
          border={"none"}
          outline="none"
          borderRadius={"lg"}
          boxShadow={"lg"}
          maxW="200px"
        >
          <WalletMenu menuButtons={menuButtons} menuBalance={menuBalance} />
        </PopoverContent>
      )}
    </Popover>
  );
}
