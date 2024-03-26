import { gallery } from "@/data/home/galleryData";
import { Box, Image, Flex } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function GallerySection() {
  return (
    <Box
      bgImg={
        "linear-gradient(112.9deg, #FFFAEE -0.14%, #FFF0EE 45.98%, #FFEEFC 100.47%)"
      }
      pt={6}
      pb={12}
    >
      <Flex py={6} justifyContent="center">
        <CHeading title={`Our Sample AI Collection`} size={1} />
      </Flex>

      {gallery.map((row, i) => (
        <Marquee direction={(i + 1) % 2 === 0 ? "right" : "left"} key={i}>
          {row.items.map((col, j) => (
            <Image
              _hover={{
                filter: "contrast(1.5)",
                transform: "scale(.96)",
              }}
              cursor={"pointer"}
              m={3}
              transition={"all 300ms ease-in-out"}
              borderRadius={"lg"}
              boxShadow={"lg"}
              maxW={"320px"}
              key={j}
              src={col}
            />
          ))}
        </Marquee>
      ))}
    </Box>
  );
}
