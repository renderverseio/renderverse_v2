import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CiText } from "react-icons/ci";

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

      <Flex w={{ base: "100%", md: "50%" }}
        rowGap={"1rem"} p={6} flexDir={"column"}>
        <CHeading size={2} title={"Roadmap 1"} />
        <CText size={2} title={note1} />
        <CText size={2} title={note2} />
        <Text fontWeight={"bold"} textDecor={"underline"}>
          Learn more →
        </Text>
        <Box borderRadius={"md"} p={3} bg="orange.100">
          <CText size={2} title={desc} />
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
