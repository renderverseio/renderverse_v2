import { gradientBgs } from "@/data/home/homeData";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function EcoSystemCard({ alignLeft, title, note1, note2, i }) {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      rowGap="1rem"
      columnGap="1rem"
      alignItems="center"
      py={6}
    >
      <Box px={4} display={{ base: "block", md: "none" }}>
        <Box
          w={{ base: "100%", md: "50%" }}
          minH="40vh"
          borderRadius="lg"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
        ></Box>
      </Box>

      {alignLeft && (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "block" }}
          minH="40vh"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
        ></Box>
      )}

      <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
          {title}
        </Text>
        <Text>{note1}</Text>
        <Text>{note2}</Text>
        <Text fontWeight={"bold"} textDecor={"underline"}>
          Learn more →
        </Text>
      </Flex>

      {!alignLeft && (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "block" }}
          minH="40vh"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
        ></Box>
      )}
    </Flex>
  );
}
