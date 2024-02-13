import CText from "@/components/typography/CText/CText";
import { Box, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function MainSubtitles() {
  return (
    <Flex w="100%" justifyContent={"center"} rowGap={"1rem"} flexDir={"column"}>
      <Flex>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          boxShadow={`lg`}
          border={`1px solid green`}
          bg="green.100"
          px={{ base: 3, md: 2 }}
          py={{ base: 2, md: 2 }}
          borderRadius="lg"
          mt={2}
        >
          <CText
            size={2}
            cprops={{
              color: "green.600",
              display: "inline-block",
              fontWeight: "bold",
            }}
            title={`New`}
          />
          <CText
            size={2}
            cprops={{
              color: "green.600",
              display: "inline-block",
              fontWeight: "bold",
              mx: 2,
            }}
            title={`-`}
          />
          <CText
            size={2}
            cprops={{
              display: "inline-block",
              fontWeight: "bold",
            }}
            title={`AI Art Generator`}
          />
        </Box>
      </Flex>

      <Flex minH={{ base: "100px", md: "120px", lg: "140px", xl: "164px" }}>
        <Box
          fontFamily={"Inter"}
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={"bold"}
        >
          <span style={{ fontWeight: "bold" }}>We empower</span>
          <span>
            <Typewriter
              options={{
                wrapperClassName: "gradient_text",
                strings: [
                  "Developers to create advanced AI projects",
                  "Artists to desing stunning AI images",
                  "Traders to execute profitable AI trades",
                ],
                autoStart: true,
                deleteSpeed: 2,
                delay: 35,
                loop: true,
              }}
            />
          </span>
        </Box>
      </Flex>
      <Flex>
        <Box
          py={2}
          px={6}
          borderRadius="md"
          boxShadow={"md"}
          cursor={"pointer"}
          className="btn btn-2"
          display={"block"}
          flex={"block"}
        >
          <CText
            cprops={{
              color: "white",
              display: "inline-block",
              fontWeight: "bold",
            }}
            size={1}
            title={`Get Started`}
          />

          <CText
            cprops={{ color: "white", display: "inline-block", mx: 1 }}
            size={1}
            title={`-`}
          />
          <CText
            cprops={{ color: "white", display: "inline-block" }}
            size={1}
            title={`It's Free`}
          />
        </Box>
      </Flex>

      <Box>
        <CText
          size={3}
          title={`Take your imagination to another level with our powerful AI models.`}
        />
      </Box>
    </Flex>
  );
}
