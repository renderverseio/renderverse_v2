import Logo from "@/assets/logo.svg";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import { desktopMenuItems } from "@/data/home/navbarData";

import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";
import MobileMenuDropDown from "@/components/dropdowns/MobileMenuDropDown/MobileMenuDropDown";
import DesktopMenuDropDown from "@/components/dropdowns/DesktopMenuDropDown/DesktopMenuDropDown";

export default function Navbar() {
  return (
    <Box minH={{ base: "10vh" }}>
      <Flex
        py={4}
        px={{ base: 4, md: 8, lg: 12, xl: 24 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          w="50%"
          columnGap={".5rem"}
          alignItems={"center"}
          justifyContent="flex-start"
          cursor={"pointer"}
          onClick={() => window.location.href = "https://renderverse.io"}
        >
          <Image src={Logo} />
          <Heading color={`gray.900`}>Renderverse</Heading>{" "}
        </Flex>
        <Box
          w={{ base: "auto", md: "none" }}
          display={{ base: "block", md: "none" }}
        >
          <MobileMenuDropDown />
        </Box>
        <Box w="100%" display={{ base: "none", md: "block" }}>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            columnGap={"1rem"}
          >
            {desktopMenuItems.map((menu, i) => (
              <Box
                GridItem justifyContent={"center"}
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
          display={{ base: "none", md: "flex" }}
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
