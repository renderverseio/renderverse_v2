import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function ChatComponent({ promp, loaded, person }) {
  return (
    <Grid>
      <GridItem pos="relative">
        <Box my={5} px={4} pt={4} display={"flex"} flexDirection="column">
          {promp.map((p, i) => (
            <Box columnGap={"2rem"} key={i} display="flex">
              {i % 2 === 0 && (
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"flex-end"}
                >
                  <FaUser size={32} />
                </Box>
              )}

              <Text
                my={4}
                p={3}
                borderRadius="md"
                fontWeight={"bold"}
                width="100%"
                mx="auto"
                fontSize={{ base: "sm" }}
              >
                {p}
              </Text>

              {i % 2 === 0 && (
                <Box
                  display={"flex"}
                  alignItems="center"
                  border="2px"
                  justifyContent={"flex-end"}
                >
                  <Image
                    borderRadius={"md"}
                    maxW="48px"
                    maxH="48px"
                    objectFit={"contain"}
                    src={chatAssitantsAvatarsData[index]}
                  ></Image>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </GridItem>
      <GridItem>
        {loaded ? (
          <Flex
            pb={8}
            fontSize={{ base: "sm", lg: "lg" }}
            pr={12}
            justifyContent={"flex-end"}
            alignItems="center"
            columnGap={".5rem"}
          >
            <Text fontSize={{ base: "md" }} fontWeight="bold">
              {person} is typing
            </Text>
            <div className="typing">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </Flex>
        ) : null}
      </GridItem>
    </Grid>
  );
}
