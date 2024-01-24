import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import { FaBoxes } from "react-icons/fa";
import BG from "/public/bg/16.jpg";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/c.json";
import SpaceNavbar from "../../components/spaces/SpaceNavbar";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useEffect } from "react";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";

export default function ChatGPTPromptSpace() {
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

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState("");

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

  function generateMusic() {
    setPromp("");
    setLoaded(true);
    axios
      .post("https://opai.renderverse.io/promptext-gen", {
        prompt: input,
        walletAddress: address,
        wallet_address: address,
      })

      .then((res) => {
        setPromp(res.data.ans);
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  const [prompts, setPrompts] = useState([]);
  useEffect(() => {
    if (address) {
      axios
        .post(
          "https://api.renderverse.io/renderscan/v1/users/op/generate-prompt/gens",
          {
            walletAddress: address,

            wallet_address: address,
          }
        )
        .then((res) => {
          console.log(res.data);
          setPrompts([...res.data.generatedPrompts]);
        })
        .catch((e) => console.log(e));
    }
  }, [address]);

  return (
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
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
            👨🏻‍🎤 ChatGPT Prompt Generator 👨🏻‍🎤
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            This app generates ChatGPT prompts, it’s based on a BART model
            trained on this dataset. 📓 Simply enter a persona that you want the
            prompt to be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫🧑🏽‍🌾
          </Text>
        </Box>
        <Box my={8} h={2} width="100%"></Box>

        {isConnected ? (
          <Box>
            <Grid
              rowGap="1rem"
              columnGap={"1rem"}
              mx="auto"
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
            >
              <GridItem
                boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                borderRadius="md"
                bg={`rgba(0,0,0,.5)`}
              >
                <FormControl px={8} py={8}>
                  <FormLabel
                    fontFamily={fonts.headingFont}
                    fontSize={{ base: "lg" }}
                    fontWeight="bold"
                    color={colors.highLightColor}
                  >
                    Input a persona, e.g. photographer
                  </FormLabel>
                  <Input
                    value={input}
                    onChange={(i) => setInput(i.target.value)}
                    placeholder="Enter a persona"
                    variant={"unstyled"}
                    boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                    p={4}
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "md" }}
                    fontWeight="bold"
                    color={colors.fontLightColor}
                  />
                  <Box>
                    <Flex py={4} columnGap=".4rem" alignItems={"center"}>
                      <FaBoxes color={colors.fontLightColor} size={18} />
                      <Text
                        size={"lg"}
                        bg={colors.bgColor}
                        p={2}
                        borderRadius="md"
                        fontFamily={fonts.parafont}
                        color={colors.highLightColor}
                        fontWeight="bold"
                      >
                        Examples
                      </Text>
                    </Flex>

                    {headers.map((h, i) => (
                      <Tag
                        size={"lg"}
                        bg={colors.bgColor}
                        fontFamily={fonts.headingFont}
                        color={colors.highLightColor}
                        boxShadow={`0 0 4px ${colors.highLightColor}`}
                        fontWeight="bold"
                        mx={2}
                        my={2}
                        key={i}
                        onClick={() => setInput(h)}
                      >
                        {h}
                      </Tag>
                    ))}
                  </Box>
                </FormControl>

                <Box mb={4} mx="auto" w="80%" py={4}>
                  <Flex justifyContent={"center"} alignItems="center">
                    {hasCredits ? (
                      <ConnectWalletButton
                        onClick={() => generateMusic()}
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
              </GridItem>

              <GridItem
                boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                borderRadius="md"
                bg={`rgba(0,0,0,.5)`}
                minH="30vh"
                pos="relative"
              >
                <Box
                  borderRadius={"md"}
                  borderBottomRadius="none"
                  borderRightRadius="none"
                  px={2}
                  py={1}
                  pos="absolute"
                  border="2px"
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
                    fontSize={{ base: "xs" }}
                  >
                    Prompt output
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
                    <Box maxW="220">
                      <Lottie animationData={groovyWalkAnimation} />
                    </Box>
                  ) : null}
                </Flex>
                <Box
                  minH="100%"
                  px={4}
                  pt={4}
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flexDirection="column"
                >
                  <Text
                    fontWeight={"bold"}
                    fontFamily={fonts.parafont}
                    width="auto"
                    color={colors.fontLightColor}
                    mx="auto"
                    fontSize={{ base: "md" }}
                  >
                    {promp}
                  </Text>
                </Box>
              </GridItem>
            </Grid>
            <Box mt={12}>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                color={colors.highLightColor}
                fontSize={{ base: "3xl" }}
                my={12}
              >
                Generated Prompt List
              </Text>
              {prompts.length === 0 ? (
                <Text
                  textAlign={"left"}
                  fontWeight={"bold"}
                  fontFamily={fonts.parafont}
                  color={colors.highLightColor}
                  fontSize={{ base: "md" }}
                >
                  No prompt generated...
                </Text>
              ) : (
                <Box>
                  <Table>
                    <Thead>
                      <Th>Created On</Th>
                      <Th>Prompt</Th>
                    </Thead>
                    <Tbody>
                      {prompts.map((p, k) => (
                        <Tr key={k}>
                          <Td>
                            <Text
                              fontWeight={"bold"}
                              fontFamily={fonts.parafont}
                              color={colors.highLightColor}
                              fontSize={{ base: "md" }}
                            >
                              {p.createdOn}
                            </Text>
                          </Td>
                          <Td>
                            <Text
                              fontWeight={"bold"}
                              fontFamily={fonts.parafont}
                              color={colors.highLightColor}
                              fontSize={{ base: "md" }}
                            >
                              {p.prompt}
                            </Text>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              )}
            </Box>
          </Box>
        ) : (
          <Flex justifyContent={"center"}>
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

const headers = ["Painter", "Actor", "Engineer"];
