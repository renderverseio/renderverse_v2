import { gallery } from "@/data/home/galleryData";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Heading, Image } from "@chakra-ui/react";
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
          {`Gallery`}
        </Heading>
      </Box>

      {gallery.map((row, i) =>
        <Marquee direction={(i + 1) % 2 === 0 ? "right" : "left"} key={i}>
          {row.items.map((col, j) => <Image
            _hover={{
              filter: "contrast(1.5)",
              transform: "scale(.96)"

            }}
            cursor={"pointer"}
            m={1}
            transition={"all 300ms ease-in-out"}
            borderRadius={"lg"}
            boxShadow={"lg"}
            maxW={"320px"}
            key={j}
            src={col} />)}
        </Marquee>
      )}

    </Box>
  );
}
