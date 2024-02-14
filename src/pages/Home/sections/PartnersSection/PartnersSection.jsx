import L1 from "@/assets/partner_logos/polygon.png";
import L2 from "@/assets/partner_logos/near.png";
import L3 from "@/assets/partner_logos/google.png";

import CHeading from "@/components/typography/CHeading/CHeading";

import { Box, Flex, Image } from "@chakra-ui/react";

const logos = [L1, L3, L2];

export default function PartnersSection() {
  return (
    <Box justifyContent={"center"} display={"grid"} rowGap="2rem">
      <Box display={"flex"} justifyContent={"center"}>
        <CHeading
          size={3}
          cprops={{ fontWeight: "bold", textAlign: "center" }}
          title={`Supported by leaders around the globe`}
        />
      </Box>

      <Flex
        minW="100%"
        columnGap={"6rem"}
        px={{ base: 0, sm: 2, md: 4, lg: 8 }}
        justifyContent="center"
        rowGap="2rem"
        flexWrap={"wrap"}
      >
        {logos.map((logo, i) => (
          <Flex key={i} justifyContent="center" alignItems={"center"}>
            <Image maxW={{ base: "120px", lg: "164px" }} key={i} src={logo} />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
