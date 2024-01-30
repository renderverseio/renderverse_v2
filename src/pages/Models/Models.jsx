import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
} from "@chakra-ui/react";

import { modelsData } from "@/data/models/ModelsData";

import Logo from "@/assets/logo.svg";
import Placeholder from "@/assets/placeholder_space.webp";

import { useNavigate } from "react-router";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import Navbar from "@/components/common/Navbar/Navbar";
import CHeading from "@/components/typography/CHeading/CHeading";


export default function Models() {
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
        <CHeading size={1} title={`Welcome to our Blog 👋`} />
        <CText
          size={1}
          title={`Find tips and tricks around sharing code snippets and other technical
          topics in general.`}
        />
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
          {modelsData.map((model, i) => (
            <CCard
              key={i}
              type="d"
              props={{
                _hover: {
                  transform: `scale(1.01)`,
                  bg: 'gray.50'
                }
              }}>
              <Flex
                onClick={() => navigate("/models/" + model.service_id)}
                flexDir={{ base: "column" }}
              >
                <Box pos="relative">
                  <Flex
                    bg="gray.200"
                    px={2}
                    py={2}
                    top={0}
                    right={0}
                    borderBottomLeftRadius="xl"
                    borderTopRightRadius={"md"}
                    pos="absolute"
                    alignItems={"center"}
                    columnGap=".5rem"
                  >
                    <Image maxW={6} src={Logo} />
                    <CText cprops={{ fontWeight: "bold" }} size={3} title={`Renderverse`} />
                  </Flex>
                  <Image borderTopRadius={"lg"} src={Placeholder} />
                </Box>
                <Box p={4}>
                  <CHeading size={3} cprops={{ color: "gray.700" }} title={model.display_name} />
                  <Divider bg="gray.700" my={2} width="90%" mx="auto" />
                  <CText size={3} title={model.short_description} />
                </Box>
              </Flex>
            </CCard>
          ))}
        </Grid>
      </Box>
    </>
  );
}
