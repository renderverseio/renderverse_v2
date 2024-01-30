import Tilt from "react-parallax-tilt";
import Snap from "@/assets/home_image.png";

import { Box, Flex, Grid, Image, } from "@chakra-ui/react";

import MainTitle from "@/components/home/MainTitle/MainTitle";
import MainSubtitles from "@/components/home/MainSubtitles/MainSubtitles";



export default function MainSection() {
  return (
    <Grid
      alignItems={"center"}
      justifyContent="space-evenly"
      pt={16}
    >
      <MainTitle />
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <MainSubtitles />
        <Box maxW={{ base: "100%", md: "50%", lg: "60%" }}>
          <Tilt>
            <Image src={Snap} alt="snappify" />
          </Tilt>
        </Box>
      </Flex>

    </Grid>
  );
}
