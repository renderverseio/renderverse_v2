import Tilt from "react-parallax-tilt";
import Snap from "@/assets/home/home_image.png";

import { Box, Flex, Grid, Image } from "@chakra-ui/react";

import MainTitle from "@/components/home/MainTitle/MainTitle";
import MainSubtitles from "@/components/home/MainSubtitles/MainSubtitles";

export default function MainSection() {
  return (
    <Grid rowGap={"4rem"} py={12} alignItems={"center"}>
      <MainTitle />
      <Grid templateColumns={{ lg: "1fr 1fr" }}>
        <MainSubtitles />
        <Tilt>
          <Image src={Snap} alt="snappify" />
        </Tilt>
      </Grid>
    </Grid>
  );
}
