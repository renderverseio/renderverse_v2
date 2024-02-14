import Router from "./router/Router";
import { theme } from "./config/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
        minH="100vh"
      >
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
