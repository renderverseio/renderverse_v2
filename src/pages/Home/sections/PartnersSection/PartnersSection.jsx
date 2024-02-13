import L1 from "@/assets/partner_logos/polygon.png";
import L2 from "@/assets/partner_logos/near.png";
import L3 from "@/assets/partner_logos/google.png";

import { Box, Flex, Image } from "@chakra-ui/react";
import CHeading from "@/components/typography/CHeading/CHeading";

const logos = [L1, L2, L3];

export default function PartnersSection() {
  return (
    <Box py={0} justifyContent={"center"} display={"grid"} rowGap="2rem">
      <Box display={"flex"} justifyContent={{ md: "center" }}>
        <CHeading
          size={3}
          cprops={{ fontWeight: "bold" }}
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
