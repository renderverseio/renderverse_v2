import { Outlet } from "react-router";
import { Box, Flex, Grid } from "@chakra-ui/react";

import DappMobileDrawer from "@/components/dapp/DappMobileDrawer/DappMobileDrawer";
import DappDesktopSideBar from "@/components/dapp/DappDesktopSidebar/DappDesktopSidebar";
import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";

export default function Dapp() {
  return (
    <Grid
      minH="100vh"
      templateColumns={{
        base: "1fr",
        lg: "2fr 7fr",
        xl: "2fr 8fr",
        "2xl": "1.6fr 7fr",
      }}
      bg="gray.200"
    >
      <Box display={{ base: "none", lg: "block" }}>
        <DappDesktopSideBar />
      </Box>

      <Box maxH="100vh" overflowY={"scroll"} w="100%">
        <Flex
          p={4}
          pr={8}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
          alignItems={{ base: "center", lg: "flex-end" }}
        >
          <DappMobileDrawer />
          <WalletMenuDropDown />
        </Flex>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Grid>
  );
}
