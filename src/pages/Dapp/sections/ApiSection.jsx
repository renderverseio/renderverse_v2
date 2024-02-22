import { Box, Divider, Flex, Grid, Image } from "@chakra-ui/react";

import Logo from "@/assets/logos/logo.png";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";
import ComingSoon from "@/components/dapp/ComingSoon/ComingSoon";

import { StakingImages } from "@/data/dapp/dappData";
import { modelsData } from "@/data/models/modelsData";

export default function Models() {
  return (
    <Box pos="relative">
      <Flex
        pos={"absolute"}
        justifyContent="center"
        alignItems={"center"}
        minH="70vh"
        minW="100%"
        zIndex={8}
      >
        <ComingSoon />
      </Flex>

      <Box filter={"blur(8px)"}>
        <Flex
          rowGap={"1rem"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems="center"
          textAlign="center"
        >
          <CHeading size={1} title={`Welcome to our Blog 👋`} />
          <CText
            size={1}
            title={`Find tips and tricks around sharing code snippets and other technical
          topics in general.`}
          />
        </Flex>
        <Box p={4}>
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
                    bg: "gray.50",
                  },
                }}
              >
                <Flex flexDir={{ base: "column" }}>
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
                      <Image minW="64px" maxW={"96px"} src={Logo} />
                    </Flex>
                    <Image borderTopRadius={"lg"} src={StakingImages[i]} />
                  </Box>
                  <Box p={4}>
                    <CHeading
                      size={3}
                      cprops={{ color: "gray.700" }}
                      title={model.display_name}
                    />
                    <Divider bg="gray.700" my={2} width="90%" mx="auto" />
                    <CText size={3} title={model.short_description} />
                  </Box>
                </Flex>
              </CCard>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
