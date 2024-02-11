import { Box } from "@chakra-ui/react";

export default function HomeContainer({ children }) {
  return (
    <Box
      px={{ base: 4, md: 8 }}
      maxW={{ base: "100%", md: "90%", lg: "85%", xl: "75%", "2xl": "1200px" }}
      mx="auto"
      display={"grid"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Box>
  );
}
