import { gradientBgs } from "@/data/home/homeData";
import { Box, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function HightLightSection() {

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
        {gradientBgs.map((c, i) => (
          <Box
            m={4}
            borderRadius="lg"
            minH={{ base: "180px", sm: "240px" }}
            minW={{ base: "240px", sm: "320px", md: "480px" }}
            key={i}
            bg={c.bg}
            bgImg={c.bgImg}
          ></Box>
        ))}
      </Marquee>

      <Marquee direction="right">
        {gradientBgs.map((c, i) => (
          <Box
            m={4}
            borderRadius="lg"
            minH={{ base: "180px", sm: "240px" }}
            minW={{ base: "240px", sm: "320px", md: "480px" }}
            key={i}
            bg={c.bg}
            bgImg={c.bgImg}
          ></Box>
        ))}
      </Marquee>
    </Box>
  );
}
