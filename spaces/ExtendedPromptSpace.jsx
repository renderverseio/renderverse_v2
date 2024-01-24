import { Box, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import axios from "axios";

import BG from "/public/bg/16.jpg";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/i.json";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import SpaceNavbar from "../../components/spaces/SpaceNavbar";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";

export default function ExtendedPromptSpace() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  const [loaded, setLoaded] = useState(false);

  const [prompt, setPrompt] = useState(null);
  const [story, setStory] = useState("");

  const [credits, setCredits] = useState();
  const [hasCredits, setHasCredits] = useState();

  useEffect(() => {
    axios
      .post("https://opai.renderverse.io/credits", {
        wallet_address: address,
      })
      .then((res) => {
        let c = res.data.credits;
        setCredits(c);
        if (c > 0) setHasCredits(true);
        else setHasCredits(false);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

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
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      pb={24}
      backgroundPosition="center"
    >
      <SpaceNavbar
        credits={credits}
        disconnect={() => disconnect()}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      />

      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        p={{ base: 2, lg: 12 }}
        mt={12}
      >
        <Box
          display={"grid"}
          p={8}
          bg={`rgba(0,0,0,.5)`}
          boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
          borderRadius="md"
        >
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            Extended Prompt
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            A prompt generation from text app utilizes natural language
            processing techniques to generate creative writing prompts based on
            user input. Users can provide keywords, themes, or specific
            preferences.
          </Text>
        </Box>

        {isConnected ? (
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
                  bg={`rgba(0,0,0,.5)`}
                  boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                  borderRadius="md"
                  alignItems="center"
                  justifyContent={"center"}
                  display={"flex"}
                  w="100%"
                >
                  <Box
                    bg={colors.bgColor}
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
                      fontFamily={fonts.parafont}
                      fontWeight="bold"
                      color={colors.fontLightColorV2}
                      fontSize={{ base: "xs" }}
                    >
                      Prompt
                    </Text>
                  </Box>
                  <Flex zIndex={8}>
                    <Input
                      color={colors.fontLightColor}
                      fontFamily={fonts.specialFont}
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
                bg={`rgba(0,0,0,.5)`}
                boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
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
                  bg={colors.bgColor}
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
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
                    <Lottie animationData={groovyWalkAnimation} />
                  ) : null}
                </Flex>
                <Flex h="100%" alignItems={"center"} justifyContent="center">
                  <Text
                    p={4}
                    color={colors.fontLightColorV2}
                    fontFamily={fonts.parafont}
                    width="100%"
                    objectFit={"contain"}
                  >
                    {story}
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
            <Box my={4} mx="auto" w="80%" py={4}>
              <Flex justifyContent={"center"} alignItems="center">
                {hasCredits ? (
                  <ConnectWalletButton
                    onClick={() => genStory()}
                    title={`Generate`}
                  />
                ) : (
                  <Box>
                    <Text
                      color={colors.boxBorder}
                      fontWeight="bold"
                      size={{ base: "sm", lg: "lg" }}
                      fontFamily={fonts.parafont}
                    >
                      Oops credits has expired, please contact team
                    </Text>
                  </Box>
                )}
              </Flex>
            </Box>
          </Box>
        ) : (
          <Flex mt={12} justifyContent={"center"}>
            <ConnectWalletButton
              onClick={connectWallet}
              title="Connect Wallet"
            />
          </Flex>
        )}
      </Box>
    </Box>
  );
}
