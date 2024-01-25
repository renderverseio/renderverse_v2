import { Box, Text } from "@chakra-ui/react";

export default function TokenTableHeader({ exchange }) {
  return <Box
    borderRadius={"md"}
    borderBottomRadius="none"
    px={2}
    py={1}
    border="2px"
  >
    <Text
      fontWeight="bold"
      fontSize={{ base: "xs" }}
    >
      {exchange} Pattern Coins
    </Text>
  </Box>

}
