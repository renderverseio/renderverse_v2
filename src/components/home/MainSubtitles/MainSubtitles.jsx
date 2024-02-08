import CText from "@/components/typography/CText/CText";
import { Box, Flex, Text } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';



export default function MainSubtitles() {
  return (
    <Flex
      w="100%"
      justifyContent={"center"}
      rowGap={"2rem"}
      flexDir={"column"}
    >
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
        >
          <CText
            size={3}
            title={
              <>
                <Box
                  color="green.600"
                  display={"inline-block"}
                  fontWeight={"bold"}
                >
                  New!
                </Box>
                {" - AI Art Generator"}
              </>
            } >
          </CText>
        </Box>
      </Flex>

      <Flex minH="180px">
        <Text fontFamily={"Inter"} fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} fontWeight={"bold"} >
          <span style={{ fontWeight: "bold" }}>
            We empower
          </span>
          <span >
            <Typewriter
              options={{
                wrapperClassName: "gradient_text",
                strings: [
                  'Developers to create stunning AI projects',
                  'Artists to desing stunning AI images',
                  'Traders to execute stunning AI trades'
                ],
                autoStart: true,
                deleteSpeed: 0.1,
                delay: 25,
                loop: true,
              }}
            />
          </span>
        </Text>
      </Flex>
      <Flex>
        <Box
          py={2}
          px={6}
          borderRadius="md"
          boxShadow={"md"}
          cursor={"pointer"}
          _hover={{
            bg: "gray.300",
            boxShadow: "lg"
          }}
          transition={`all 300ms ease-in-out`}
          bg="gray.100"

        >
          <CText size={1} title={
            <>
              <Box display={"inline-block"} fontWeight={"bold"}>
                Get Started
              </Box>{" "}
              - {`It's`} Free
            </>
          } >
          </CText>
        </Box>
      </Flex>

      <Box>
        <Text color={"gray.700"} fontSize={{ base: "sm" }}>
          Take your imagination to another level with our powerful AI models.
        </Text>
      </Box>
    </Flex >

  )
}
