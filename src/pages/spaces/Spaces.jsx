import Navbar from "../../components/Navbar";
import Placeholder from "../../assets/placeholder_space.webp";
import Logo from "../../assets/logo.svg";

import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Spaces() {
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

export const spacesData = [
  {
    display_name: "Image Generation",
    tags: ["ai", "image", "generation"],
    desc: "These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.",
    link: "image-generation",
  },
  {
    display_name: "Chat Assistant",
    tags: ["chat", "ai", "text"],
    desc: "The chat assistant uses natural language processing algorithms to understand and respond to user input. It can engage in casual conversations, answer queries, and even tell jokes or anecdotes in a manner consistent with the chosen celebrity's style.",
    link: "chat-assistant",
  },
  {
    display_name: "Face Swap",
    tags: ["ai", "image", "generation"],
    link: "face-swap",
    desc: "The algorithm then replaces the facial features of one individual with those of another. This process involves overlaying the features of one face onto the image of another while maintaining the original image",
  },
  {
    display_name: "ChatGPT Prompt",
    tags: ["ai", "text", "text2text"],
    desc: "This app generates ChatGPT prompts, it’s based on a BART model trained on this dataset. 📓 Simply enter a persona that you want the prompt to be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫🧑🏽‍🌾",
    link: "chatgpt-prompt",
  },
  {
    display_name: "Extended Prompt",
    tags: ["text", "image", "generation"],
    link: "extended-prompt",
    desc: "A prompt generation from text app utilizes natural language processing techniques to generate creative writing prompts based on user input. Users can provide keywords, themes, or specific preferences.",
  },
  {
    display_name: "Pump Finder",
    tags: ["crypto", "ai", "trading"],
    link: "pump-finder",
    desc: "The tool operates in real-time, continuously monitoring market fluctuations and price movements to promptly identify any irregularities that may suggest a token pump.",
  },
  {
    display_name: "Pattern Detector",
    tags: ["crypto", "ai", "trading"],
    link: "pattern-detector",
    desc: "The analyzer employs a sophisticated pattern recognition algorithm to identify a variety of chart patterns, including but not limited to triangles, flags, head and shoulders, and more. This helps users anticipate potential price movements.",
  },
  {
    display_name: "Token Analyzer",
    tags: ["crypto", "ai", "trading"],
    link: "token-analyzer",
    desc: "Integrating sentiment analysis algorithms, the tool gauges the overall market sentiment related to specific coins. This information can be valuable for understanding community perceptions and potential market trends.",
  },
  {
    display_name: "Token Tracker",
    tags: ["crypto", "ai", "trading"],
    link: "token-tracker",
    desc: " A Leveraging AI algorithms, the tracker may offer price prediction models for selected cryptocurrencies based on historical data and market trends, aiding users in making informed future investment decisions.",
  },
];
