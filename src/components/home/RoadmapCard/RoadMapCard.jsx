import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Mission from "@/assets/ourmission.png";
import { FaRegDotCircle } from "react-icons/fa";

export default function RoadmapCard({ alignLeft, title, phase, i }) {
  console.log(phase[0].milestones);
  return (
    <Flex
      w="100%"
      columnGap={"2rem"}
      rowGap="2rem"
      alignItems="center"
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
      flexGrow={1}
      flexBasis={0}
    >
      <Box my={4} w="100%" display={{ base: "block", md: "none" }}>
        <Box
          borderRadius="lg"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
        >
          <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
            <CHeading size={2} title={title} />
            <Divider />
            {phase[0].milestones.map((p, i) => (
              <Flex columnGap={".5rem"} alignItems="center">
                <FaRegDotCircle />
                <CText size={3} title={p} />
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>

      {alignLeft && (
        <Box
          display={{ base: "none", md: "block" }}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          w="100%"
        >
          <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
            <CHeading size={2} title={title} />
            <Divider />
            {phase[0].milestones.map((p, i) => (
              <Flex columnGap={".5rem"} alignItems="center">
                <FaRegDotCircle />
                <CText size={3} title={p} />
              </Flex>
            ))}
          </Flex>
        </Box>
      )}

      <Flex display={{ base: "none", lg: "flex" }}>
        <Image maxW={"330px"} src={Mission} />
      </Flex>

      {!alignLeft && (
        <Box
          display={{ base: "none", md: "block" }}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          w="100%"
        >
          <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
            <CHeading size={2} title={title} />
            <Divider />
            {phase[0].milestones.map((p, i) => (
              <Flex columnGap={".5rem"} alignItems="center">
                <FaRegDotCircle />
                <CText size={3} title={p} />
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
