import { theme } from "./config/theme";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";

import { Box, ChakraProvider } from "@chakra-ui/react";
import Roadmap from "./pages/Roadmap";
import EcoSystem from "./pages/EcoSystem";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
        minH="100vh"
      >
        <Navbar />
        <Box
          p={{ base: 4, md: 8 }}
          maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "65%" }}
          mx="auto"
        >
          <Index />
          <Roadmap />
          <EcoSystem />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
