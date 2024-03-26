import CText from "@/components/typography/CText/CText";
import { Box, Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router";

export default function MainSubtitles() {
  const navigate = useNavigate();
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
            title={`New featured GPTs every week!`}
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
          px={3}
          borderRadius="md"
          boxShadow={"md"}
          onClick={() => navigate("/dapp/dashboard")}
          cursor={"pointer"}
          className="btn btn-2"
          display={"block"}
          flex={"block"}
          marginRight={"4"}
        >
          <CText
            cprops={{
              color: "white",
              display: "inline-block",
              fontWeight: "bold",
            }}
            size={2}
            title={`Get Started`}
          />

          <CText
            cprops={{ color: "white", display: "inline-block", mx: 1 }}
            size={2}
            title={`-`}
          />
          <CText
            cprops={{ color: "white", display: "inline-block" }}
            size={2}
            title={`It's Free`}
          />
        </Box>
        <Box
          as="a"
          href="https://t.me/RenderverseAI_bot"
          target="_blank"
          fontWeight={"bold"}
          p={3}
          borderRadius="lg"
          className="btn btn-1"
          boxShadow={"lg"}
        >
          Try Our TG Bot
        </Box>
      </Flex>

      <Box>
        <CText size={3} title={`Discover what’s trending in the store`} />
      </Box>
    </Flex>
  );
}
