import Logo from "@/assets/logos/logo.png";

import { Box, Flex, Image } from "@chakra-ui/react";

import { desktopMenuItems } from "@/data/home/navbarData";

import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";
import MobileMenuDropDown from "@/components/dropdowns/MobileMenuDropDown/MobileMenuDropDown";
import DesktopMenuDropDown from "@/components/dropdowns/DesktopMenuDropDown/DesktopMenuDropDown";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box minH={{ base: "10vh" }}>
      <Flex
        px={{ base: 4, md: 8, lg: 12, xl: 24 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={3}
      >
        <Flex
          columnGap={".5rem"}
          alignItems={"center"}
          justifyContent="flex-start"
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <Image maxW={"220px"} src={Logo} />
        </Flex>
        <Box
          w={{ base: "auto", md: "none" }}
          display={{ base: "block", lg: "none" }}
        >
          <MobileMenuDropDown />
        </Box>
        <Box w="100%" display={{ base: "none", lg: "block" }}>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            columnGap={"1rem"}
          >
            {desktopMenuItems.map((menu, i) => (
              <Box
                justifyContent={"center"}
                alignItems="center"
                display={"flex"}
                key={i}
                cursor="pointer"
              >
                <DesktopMenuDropDown menu={menu.menu} options={menu.options} />
                {i !== desktopMenuItems.length - 1 && (
                  <Box
                    marginLeft={"1rem"}
                    minH="12px"
                    maxH="12px"
                    borderLeft={"2px solid gray"}
                  ></Box>
                )}
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex
          display={{ base: "none", lg: "flex" }}
          justifyContent={"flex-end"}
          alignItems="center"
          columnGap={"1rem"}
        >
          <WalletMenuDropDown />
        </Flex>
      </Flex>
    </Box>
  );
}
