import { Box } from "@chakra-ui/react";
import { Grid } from "react-loader-spinner";

export default function Apploader() {
  return (
    <Box
      minH="100vh"
      minW="100vw"
      bg="gray.200"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Grid color="gray" />
    </Box>
  );
}
