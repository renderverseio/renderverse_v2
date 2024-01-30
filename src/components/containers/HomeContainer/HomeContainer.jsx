import { Box } from "@chakra-ui/react";

export default function HomeContainer({ children }) {
  return <Box
    px={{ base: 4, md: 8 }}
    maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "65%" }}
    mx="auto"
  >
    {children}
  </Box>

}
