import { Box, Flex, Button } from "@chakra-ui/react";

import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function SubscribeSection() {
  return <Box
    display={"grid"}
    rowGap="2rem"
    justifyContent={"center"}
    alignItems="center"
    bgImg={'linear-gradient(112.9deg, #FFFAEE -0.14%, #FFF0EE 45.98%, #FFEEFC 100.47%)'}
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
      <Button>Subscribe</Button>
    </Flex>
  </Box>


}
