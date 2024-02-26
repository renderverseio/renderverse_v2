import { theme } from "./config/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Router from "./router/Router";

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
