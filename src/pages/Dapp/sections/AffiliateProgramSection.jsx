import { Box, Flex } from "@chakra-ui/react";
import ComingSoon from "./ComingSoon";

export default function AffiliateProgramSection() {
  return (
    <Box>
      <Flex minH="60vh" alignItems={"center"} justifyContent={"center"}>
        <ComingSoon />
      </Flex>
    </Box>
  );
}
