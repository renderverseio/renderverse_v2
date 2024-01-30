import L1 from "@/assets/partner_logos/vendure.svg";
import L2 from "@/assets/partner_logos/jina.svg";
import L3 from "@/assets/partner_logos/textualize.svg";
import L4 from "@/assets/partner_logos/chakraui.svg";
import L5 from "@/assets/partner_logos/supabase.svg";

import { Box, Flex, Heading, Image, Grid } from "@chakra-ui/react";

const logos = [L1, L2, L3, L4, L5];

export default function PartnersSection() {
  return (
    <Box justifyContent={"center"} display={"grid"} rowGap="2rem">
      <Box display={"flex"} justifyContent={{ md: "center" }}> <Heading
        color={"gray.700"}
        display={"inline-block"}
        fontWeight={"bold"}
        textAlign="center"
      >
        Trusted by{" "}
        <span style={{ fontWeight: "normal" }}>
          leaders around the globe
        </span>
      </Heading>
      </Box>

      <Grid
        px={{ base: 0, sm: 2, md: 4, lg: 8 }}
        gridTemplateColumns={{
          base: "1fr ",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr 1fr",
        }}
        rowGap="2rem"
      >
        {logos.map((logo, i) => (
          <Flex key={i} justifyContent="center" alignItems={"center"}>
            <Image key={i} src={logo} />
          </Flex>
        ))}
      </Grid>
    </Box>
  )
}
