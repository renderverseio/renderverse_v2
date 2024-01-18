import Tilt from "react-parallax-tilt";
import Snap from "../assets/home_image.png";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import L1 from "../assets/logos/vendure.svg";
import L2 from "../assets/logos/jina.svg";
import L3 from "../assets/logos/textualize.svg";
import L4 from "../assets/logos/chakraui.svg";
import L5 from "../assets/logos/supabase.svg";

export default function Index() {
  const logos = [L1, L2, L3, L4, L5];
  return (
    <Grid
      alignItems={"center"}
      justifyContent="space-evenly"
      rowGap={{ base: "1rem", md: "3rem", lg: "4rem" }}
      py={2}
    >
      <Box
        maxW={{ base: "100%", md: "90%", lg: "70%" }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <Heading
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "4xl",
            xl: "5xl",
          }}
          color={"gray.700"}
        >
          {`$RDAI is the first AI ORDINAL on `}
          <span className="gradient_text">BRC-20 Network</span>{" "}
        </Heading>
      </Box>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Flex
          w="100%"
          justifyContent={"center"}
          flexDir={"column"}
          rowGap={{
            base: "1rem",
            md: "2rem",
            lg: "3rem",
            xl: "2rem",
          }}
        >
          <Flex>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              boxShadow={`lg`}
              border={`1px solid green`}
              bg="green.100"
              px={{ base: 3, md: 2 }}
              py={{ base: 2, md: 2 }}
              borderRadius="lg"
            >
              <Text color={"gray.700"} fontSize={{ base: "md" }}>
                <Box
                  color="green.600"
                  display={"inline-block"}
                  fontWeight={"bold"}
                >
                  New!
                </Box>
                {" - Experimental Video Export"}
              </Text>
            </Box>
          </Flex>
          <Box>
            <Text color={"gray.700"} fontSize={{ base: "xl", lg: "2xl" }}>
              Take your Code presentation to the next level with {`snappify's`}{" "}
              powerful animations features.
            </Text>
          </Box>
          <Flex>
            <Box
              fontSize={{ base: "md", lg: "xl", xl: "2xl" }}
              p={2}
              borderRadius="md"
              cursor={"pointer"}
              _hover={{
                bg: "blue.300",
              }}
              transition={`all 300ms ease-in-out`}
              bg="blue.500"
            >
              <Text color="white">
                <Box display={"inline-block"} fontWeight={"bold"}>
                  Get Started
                </Box>{" "}
                - {`It's`} Free
              </Text>
            </Box>
          </Flex>

          <Box>
            {`Avatars Section`}
            <Text color={"gray.700"} fontSize={{ base: "sm" }}>
              Join the community of 24k+ developers spicing up their content
            </Text>
          </Box>
        </Flex>

        <Box maxW={{ base: "100%", md: "50%", lg: "60%" }}>
          <Tilt>
            <Image src={Snap} alt="snappify" />
          </Tilt>
        </Box>
      </Flex>

      <Box justifyContent={"center"} display={"grid"} rowGap="2rem">
        <Box display={"flex"} justifyContent={{ md: "center" }}>
          <Heading
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
    </Grid>
  );
}
