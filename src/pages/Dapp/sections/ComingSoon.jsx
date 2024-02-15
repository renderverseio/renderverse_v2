import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { Box, Flex } from "@chakra-ui/react";

export default function ComingSoon() {
  return (
    <Box>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg="rgba(0,0,0,0.5)"
        p={8}
        borderRadius="lg"
        boxShadow={"lg"}
      >
        <CHeading
          cprops={{ textAlign: "center", color: "gray.100" }}
          title={"Great Things coming soon."}
          size={2}
        />
        <CText
          cprops={{ textAlign: "center", color: "gray.200" }}
          title={`We are small and growing continuously with big ideas.`}
          size={2}
        />
      </Flex>
    </Box>
  );
}
