import { theme } from "./config/theme";

import Home from "@/pages/Home/Home";
import Spaces from "@/pages/Spaces/Spaces";
import SpaceFactory from "@/pages/Space/SpacesFactory";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

const chains = [bsc, bscTestnet];
const projectId = "f5dcf20eb66353538219a935685ad5fd";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/spaces",
    element: <Spaces />,
  },
  {
    path: "/spaces/:space",
    element: <SpaceFactory />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
        minH="100vh"
      >
        <WagmiConfig config={wagmiConfig}>
          <RouterProvider router={router} />
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
