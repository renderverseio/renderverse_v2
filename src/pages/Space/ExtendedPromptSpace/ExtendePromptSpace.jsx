import { Box, Button, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import axios from "axios";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent";
import DescriptionBox from "@/components/spaces/DescriptionBox";


export default function ExtendedPromptSpace() {

  const { address, isConnected, connectWallet, disconnect } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected })

  const [loaded, setLoaded] = useState(false);

  const [prompt, setPrompt] = useState(null);
  const [story, setStory] = useState("");


  function genStory() {
    setStory("");
    setLoaded(true);
    axios({
      method: "POST",
      url: "https://opai.renderverse.io/promptext-gen",
      data: {
        prompt: prompt,
        wallet_address: address,
      },
    })
      .then((res) => {
        setStory(res.data.ans);
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Box>
      <DescriptionBox title={`Extended Prompt`}
        desc={`A prompt generation from text app utilizes natural language
          processing techniques to generate creative writing prompts based on
          user input. Users can provide keywords, themes, or specific
          preferences.`} />

      {isConnected && (
        <Box mt={12}>
          <Grid
            rowGap="1rem"
            columnGap={"2rem"}
            mx="auto"
            gridTemplateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
          >
            <GridItem display="grid" rowGap={"2rem"}>
              <GridItem
                pos="relative"
                minH="240px"
                borderRadius="md"
                alignItems="center"
                justifyContent={"center"}
                display={"flex"}
                w="100%"
              >
                <Box
                  px={2}
                  py={1}
                  pos="absolute"
                  border="2px"
                  top={0}
                  borderRadius={"md"}
                  borderBottomRadius="none"
                  borderRightRadius="none"
                  left={0}
                >
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "xs" }}
                  >
                    Prompt
                  </Text>
                </Box>
                <Flex zIndex={8}>
                  <Input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </Flex>
              </GridItem>
            </GridItem>

            <GridItem
              pos="relative"
              minH="240px"
              borderRadius="md"
            >
              <Box
                px={2}
                py={1}
                pos="absolute"
                border="2px"
                borderRadius={"md"}
                borderBottomRadius="none"
                borderRightRadius="none"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs" }}
                >
                  Story Output
                </Text>
              </Box>
              <Flex
                pos={"absolute"}
                zIndex={8}
                alignItems={"center"}
                height="100%"
                width="100%"
                justifyContent={"center"}
              >
                {loaded ? (
                  <Box>
                    {'lottie'}
                  </Box>
                ) : null}
              </Flex>
              <Flex h="100%" alignItems={"center"} justifyContent="center">
                <Text
                  p={4}
                  width="100%"
                  objectFit={"contain"}
                >
                  {story}
                </Text>
              </Flex>
            </GridItem>
          </Grid>
          <CreditsCheckerComponent
            hasCredits={hasCredits}
            onClickText={`Generate`}
            onClick={() => genStory()} />
        </Box>
      )}

      {!isConnected && (
        <Flex mt={12} justifyContent={"center"}>
          <Button
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        </Flex>
      )}
    </Box>
  );
}
