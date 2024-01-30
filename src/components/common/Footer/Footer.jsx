import {
  Box,
  Flex,
  GridItem,
  Link,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";

import Logo from "@/assets/logo.svg";

import { footerData } from "@/data/home/footerData";

export default function Footer() {
  return (
    <Box
      bgImage={`linear-gradient(to right bottom, #6527be, #5a21ac, #4f1b9a, #441689, #3a1078);`}
      p={{ base: 4, md: 8 }}
    >
      <Box
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "70%" }}
        mx="auto"
      >
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDir={{ base: "column" }}
            justifyContent={"center"}
            rowGap="1rem"
            w="50%"
          >
            <Flex
              columnGap={".5rem"}
              alignItems={"center"}
              justifyContent="flex-start"
            >
              <Image src={Logo} />{" "}
              <Heading color={`white`}>Renderverse</Heading>{" "}
            </Flex>
            <Box color="white">
              <Text>Create stunning Code Presentations</Text>
              <Text>and smoothly animated videos.</Text>
            </Box>
            <Box color="white">
              <Text>© seriouscode GmbH</Text>
              <Text>All Rights Reserved.</Text>
            </Box>
          </Box>
          <Flex
            py={{ base: 20 }}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-evenly"}
            w="100%"
          >
            {footerData.map((d, i) => (
              <Flex flexDir={"column"} key={i}>
                <Text my={2} color="white" fontWeight={"bold"}>
                  {d.title}
                </Text>
                {d.options.map((o, k) => (
                  <GridItem key={k}>
                    <Link color="white">{o}</Link>
                  </GridItem>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex px={8} pt={8} columnGap="1rem" justifyContent={"flex-end"}>
          <Button>Join Our Discord</Button>
          <Button>#2 Product of the day</Button>
        </Flex>
      </Box>
    </Box>
  );
}

