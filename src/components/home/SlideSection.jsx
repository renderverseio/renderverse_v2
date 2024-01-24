import { Box, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function SlideSection() {
  const colors = [
    {
      bg: "#4158D0",
      bgImg: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
    {
      bg: "#0093E9",
      bgImg: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
    {
      bg: "#8EC5FC",
      bgImg: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    },
    {
      bg: "#FBAB7E",
      bgImg: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    },
  ];

  return (
    <Box py={24}>
      <Box
        my={12}
        maxW={{ base: "100%", md: "90%", lg: "70%", xl: "60%", "2xl": "40%" }}
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
          {`Because your code deserves a `}
          <span className="gradient_text">stunning presentation</span>{" "}
        </Heading>
      </Box>
      <Marquee>
        {colors.map((c, i) => (
          <Box
            m={4}
            borderRadius="lg"
            minH={{ base: "180px", sm: "240px" }}
            minW={{ base: "240px", sm: "320px", md: "480px" }}
            key={i}
            bg={colors[i].bg}
            bgImg={colors[i].bgImg}
          ></Box>
        ))}
      </Marquee>

      <Marquee direction="right">
        {colors.map((c, i) => (
          <Box
            m={4}
            borderRadius="lg"
            minH={{ base: "180px", sm: "240px" }}
            minW={{ base: "240px", sm: "320px", md: "480px" }}
            key={i}
            bg={colors[i].bg}
            bgImg={colors[i].bgImg}
          ></Box>
        ))}
      </Marquee>
    </Box>
  );
}
