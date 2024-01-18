import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";

function App() {
  return (
    <ChakraProvider>
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
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
