import { theme } from "./config/theme";

import { Box, ChakraProvider } from "@chakra-ui/react";

import Router from "./router/Router";
import WalletConnection from "./blockchain/WalletConnection";
import UniSatWalletSdk from "./blockchain/UniSatWalletSdk";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
        minH="100vh"
      >
        <WalletConnection children={<Router />} />
        <UniSatWalletSdk />
      </Box>
    </ChakraProvider>
  );
}

export default App;
