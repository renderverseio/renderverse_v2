import { gradientBgs } from "@/data/home/homeData";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function RoadmapCard({ alignLeft, title, note1, note2, desc, i }) {
  return (
    <Flex
      columnGap={"1rem"}
      rowGap="2rem"
      alignItems="center"
      flexDir={{ base: "column", md: "row" }}
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
        <Box borderRadius={"md"} p={3} bg="orange.100">
          <Text>{desc}</Text>
        </Box>
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
