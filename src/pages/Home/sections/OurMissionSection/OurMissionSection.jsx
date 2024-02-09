import {
  Box,
  Button,
  Flex,
  Image,
  Grid,
} from "@chakra-ui/react";

import OurMissionLogo from "@/assets/ourmission.jpeg";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";

export default function OurMissionSection() {
  return (
    <Box bg="white">
      <Box
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
        /
        >
        <Flex justifyContent={"center"}>
          <Button>Subscribe</Button>
        </Flex>
      </Box>

      <Grid
        p={{ base: 4, md: 8 }}
        columnGap={{ base: 0, md: "2rem", lg: "4rem", xl: "6rem" }}
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "65%" }}
        mx="auto"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Image p={{ base: 0, md: 4, lg: 8, xl: 12 }} src={OurMissionLogo} />
        <Grid rowGap={"1rem"}>
          <CHeading size={1} title={`Our Mission`} />
          <CText size={2} title={`Our mission is clear—to empower web3 users with the transformative capabilities of AI within the BRC-20 ecosystem. We aim to lead the charge in the Bitcoin blockchain revolution by providing accessible and user-friendly AI ordinals.`} />
          <CText size={2} title={`Together, we're shaping a future where seamless integration of AI fuels innovation and propels us to the forefront of the digital landscape. Join us as we redefine the possibilities in the BRC-20 space.`} />
        </Grid>
      </Grid>
    </Box>
  );
}
