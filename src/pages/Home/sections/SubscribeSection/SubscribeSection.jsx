import { Box, Flex } from "@chakra-ui/react";

import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";
import { gradientBgs } from "@/data/home/homeData";

export default function SubscribeSection() {
  return (
    <Box
      display={"grid"}
      rowGap="2rem"
      justifyContent={"center"}
      alignItems="center"
      p={16}
    >
      <CHeading
        size={2}
        title={`Wanna stay up-to-date?`}
        cprops={{ textAlign: "center" }}
      />
      <CText
        size={1}
        title={`Sign up for our newsletter and we'll keep you updated with news about snappify`}
        cprops={{ textAlign: "center" }}
      />
      <Flex justifyContent={"center"}>
        <Box
          fontWeight={"bold"}
          p={3}
          borderRadius="lg"
          className="btn btn-1"
          boxShadow={"lg"}
        >
          Join Our Discord
        </Box>
      </Flex>
    </Box>
  );
}
