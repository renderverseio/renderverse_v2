import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import spacesData from "@/data/spaces/spacesData";

import Logo from "@/assets/logo.svg";
import Placeholder from "@/assets/placeholder_space.webp";
import Navbar from "@/components/common/Navbar";

import { useNavigate } from "react-router";

export default function Spaces() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Flex
        my={12}
        rowGap={"1rem"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems="center"
        p={6}
        textAlign="center"
      >
        <Heading>Welcome to our Blog 👋</Heading>
        <Text>
          Find tips and tricks around sharing code snippets and other technical
          topics in general.
        </Text>
      </Flex>
      <Box
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "70%" }}
        pb={12}
        mx="auto"
      >
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          rowGap={"2rem"}
          p={8}
          columnGap="2rem"
        >
          {spacesData.map((space, i) => (
            <Flex
              borderRadius={"lg"}
              onClick={() => navigate("/spaces/" + space.link)}
              _hover={{
                boxShadow: "2xl",
              }}
              cursor="pointer"
              transition="all 300ms ease-in-out"
              boxShadow={"md"}
              key={i}
              flexDir={{ base: "column" }}
            >
              <Box pos="relative">
                <Flex
                  bg="orange.200"
                  px={2}
                  py={2}
                  top={0}
                  right={0}
                  borderBottomLeftRadius="xl"
                  borderTopRightRadius={"md"}
                  pos="absolute"
                  alignItems={"center"}
                  columnGap=".25rem"
                >
                  <Image maxW={6} src={Logo} />
                  <Text fontSize={{ base: "sm" }} fontWeight={"bold"}>
                    Renderverse
                  </Text>
                </Flex>
                <Image borderTopRadius={"lg"} src={Placeholder} />
              </Box>
              <Box p={4}>
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"}>
                  {space.display_name}
                </Text>
                <Divider my={4} width="90%" mx="auto" />
                <Text>{space.desc}</Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
    </>
  );
}
