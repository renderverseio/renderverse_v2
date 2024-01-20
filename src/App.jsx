import { theme } from "./config/theme";

import Home from "./pages/Home";
import Spaces from "./pages/spaces/Spaces";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/spaces",
    element: <Spaces />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
        minH="100vh"
      >
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
