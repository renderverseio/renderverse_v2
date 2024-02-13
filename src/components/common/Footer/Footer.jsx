import { Box, Flex, GridItem, Link, Image, Button } from "@chakra-ui/react";

import Logo from "@/assets/logos/white.png";

import { footerData } from "@/data/home/footerData";

import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function Footer() {
  return (
    <Box
      bgImage={`linear-gradient(to right bottom, #6527be, #5a21ac, #4f1b9a, #441689, #3a1078);`}
      p={{ base: 4, md: 0 }}
    >
      <Box
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "70%" }}
        mx="auto"
        py={12}
      >
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDir={{ base: "column" }}
            justifyContent={{ base: "center" }}
            rowGap="1rem"
            w="90%"
            px={{ base: 0, lg: 6 }}
          >
            <Flex
              columnGap={".5rem"}
              alignItems={"center"}
              justifyContent="flex-start"
            >
              <Image maxW={"248px"} src={Logo} />{" "}
            </Flex>
            <Box>
              <CText
                cprops={{
                  color: "white",
                  fontSize: "lg",
                }}
                size={2}
                title={"The first AI ORDINAL on"}
              />
              <CText
                cprops={{
                  color: "white",
                  fontSize: "lg",
                }}
                size={2}
                title={"BRC-20 Network"}
              />
            </Box>
            <Box>
              <CText
                cprops={{
                  color: "white",
                  fontSize: "lg",
                }}
                size={2}
                title={"©Renderverse"}
              />
              <CText
                cprops={{
                  color: "white",
                  fontSize: "lg",
                }}
                size={2}
                title={"All Rights Reserved."}
              />
            </Box>
          </Box>
          <Flex
            py={{ base: 8 }}
            columnGap={"4rem"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-evenly"}
            w="100%"
          >
            {footerData.map((d, i) => (
              <Flex
                flexDir={"column"}
                columnGap={"3rem"}
                rowGap={".6rem"}
                key={i}
              >
                <CHeading
                  size={3}
                  title={d.title}
                  cprops={{
                    my: 2,
                    color: "white",
                  }}
                />
                {d.options.map((o, k) => (
                  <GridItem key={k}>
                    <Link color="white">
                      <CText
                        cprops={{
                          color: "white",
                          fontSize: { base: "lg" },
                        }}
                        size={3}
                        title={o}
                      />
                    </Link>
                  </GridItem>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex px={8} pb={8} columnGap="1rem" justifyContent={"flex-end"}>
          <Link href="https://twitter.com/teamrenderverse" target={"_blank"}>
            <Box
              fontWeight={"bold"}
              p={3}
              borderRadius="lg"
              className="btn btn-1"
              boxShadow={"lg"}
            >
              Join Our Twitter
            </Box>
          </Link>
          <Link href="https://t.me/renderversechat" target={"_blank"}>
            <Box
              fontWeight={"bold"}
              p={3}
              borderRadius="lg"
              className="btn btn-2"
              boxShadow={"lg"}
            >
              Join Our Telegram
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
