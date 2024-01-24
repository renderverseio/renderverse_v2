import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";

export default function GeneratedImageGrid({ address }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const resp = await spacesRequests.generatedImages({ address });
        setImages([...resp.data.generatedImages]);
      } catch (err) {
        console.log(err);
      }
    };
    loadImages();
  }, [address]);

  return (
    <React.Fragment>
      <Text
        px={3}
        textAlign={"left"}
        fontWeight={"bold"}
        fontSize={{ base: "3xl" }}
      >
        Generated Images
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr 1fr",
        }}
        rowGap="1rem"
        columnGap={"1rem"}
      >
        {images.map((i, s) => (
          <Flex
            pos="relative"
            _hover={{
              filter: `contrast(150%)`,
              transform: `scale(.95)`,
              boxShadow: "2xl",
            }}
            key={s}
            m={2}
            borderRadius={"lg"}
            cursor="pointer"
            transition="all 300ms ease-in-out"
            boxShadow={"md"}
            flexDir={{ base: "column" }}
          >
            <Image
              borderRadius={"lg"}
              objectFit={"cover"}
              src={`data:image/png;base64,` + i.img}
            />
          </Flex>
        ))}
      </Grid>
    </React.Fragment>
  );
}
