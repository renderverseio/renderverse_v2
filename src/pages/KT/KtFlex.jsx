import { Box, Flex } from "@chakra-ui/react";
const items = [0, 1, 2, 3, 4, 5, 6];
export default function KtFlex() {
  return (
    <Box
      display={"flex"}
      flexDir="column"
      columnGap={"1rem"}
      rowGap="1rem"
      h={"80vh"}
      w="80vw"
      bg="blue"
      justifyContent={"space-around"}
      alignItems="center"
    >
      {items.map((item, i) => (
        <Box h="5vh" w="5vw" key={i} bg="green">
          {item}
        </Box>
      ))}
    </Box>
  );
}
