import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { Box, Flex } from "@chakra-ui/react";

export default function ComingSoon() {
  return <Box>
    <Flex minH="60vh" flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <CHeading title={'Great Things coming soon.'} size={1} />
      <CText title={`We are small and growing consulting from with big ideas.`} size={2} />
    </Flex>
  </Box>
} 
