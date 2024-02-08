import L1 from "@/assets/partner_logos/polygon.png";
import L2 from "@/assets/partner_logos/near.png";
import L3 from "@/assets/partner_logos/google.png";

import { Box, Flex, Heading, Image, Grid, AspectRatio } from "@chakra-ui/react";

const logos = [L1, L2, L3];

export default function PartnersSection() {
  return (
    <Box justifyContent={"center"} display={"grid"} rowGap="2rem">

      <Box display={"flex"} justifyContent={{ md: "center" }}>
        <Heading
          color={"gray.700"}
          display={"inline-block"}
          fontWeight={"bold"}
          textAlign="center"
        >
          Supported by{" "}
          <span style={{ fontWeight: "normal" }}>
            leaders around the globe
          </span>
        </Heading>
      </Box>

      <Flex
        minW="100%"
        columnGap={"6rem"}
        px={{ base: 0, sm: 2, md: 4, lg: 8 }}
        rowGap="2rem"
      >
        {logos.map((logo, i) => (
          <Flex key={i} justifyContent="center" alignItems={"center"}>
            <Image maxW={"225px"} key={i} src={logo} />
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
