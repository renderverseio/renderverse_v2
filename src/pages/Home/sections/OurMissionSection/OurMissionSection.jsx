import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";

import OurMissionLogo from "@/assets/ourmission.png";

export default function OurMissionSection() {
  return (
    <Box bg="white">
      <Box
        display={"grid"}
        rowGap="2rem"
        justifyContent={"center"}
        alignItems="center"
        bg="orange.100"
        p={16}
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          Wanna stay up-to-date?
        </Heading>
        <Text textAlign={"center"}>
          {`Sign up for our newsletter and we'll keep you updated with news about
          snappify`}
        </Text>
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
          <Heading>Our Mission</Heading>
          <Text>
            {`Our mission is clear—to empower web3 users with the transformative capabilities of AI within the BRC-20 ecosystem. We aim to lead the charge in the Bitcoin blockchain revolution by providing accessible and user-friendly AI ordinals.`}
          </Text>
          <Text>{`Together, we're shaping a future where seamless integration of AI fuels innovation and propels us to the forefront of the digital landscape. Join us as we redefine the possibilities in the BRC-20 space.`}</Text>
        </Grid>
      </Grid>
    </Box>
  );
}
