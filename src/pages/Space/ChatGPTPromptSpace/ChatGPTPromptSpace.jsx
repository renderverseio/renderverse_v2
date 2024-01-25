import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";

import axios from "axios";

import { FaBoxes } from "react-icons/fa";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useEffect, useState } from "react";

import DescriptionBox from "@/components/spaces/DescriptionBox";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";

export default function ChatGPTPromptSpace() {
  const { address, disconnect, connectWallet, isConnected } = useWallet()
  const { hasCredits } = useCredits({ isConnected, address })

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState("");

  function generatePrompt() {
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
    <Box>
      <DescriptionBox
        title={`👨🏻‍🎤 ChatGPT Prompt Generator 👨🏻‍🎤`}
        desc={`This app generates ChatGPT prompts, it’s based on a BART model
          trained on this dataset. 📓 Simply enter a persona that you want the
          prompt to be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫🧑🏽‍🌾`}
      />
      {isConnected && (
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
              borderRadius="md"
            >
              <FormControl px={8} py={8}>
                <FormLabel
                  fontSize={{ base: "lg" }}
                >
                  Input a persona, e.g. photographer
                </FormLabel>
                <Input
                  value={input}
                  onChange={(i) => setInput(i.target.value)}
                  placeholder="Enter a persona"
                  p={4}
                  fontSize={{ base: "md" }}
                  fontWeight="bold"
                />
                <Box>
                  <Flex py={4} columnGap=".4rem" alignItems={"center"}>
                    <FaBoxes size={18} />
                    <Text
                      size={"lg"}
                      p={2}
                      borderRadius="md"
                      fontWeight="bold"
                    >
                      Examples
                    </Text>
                  </Flex>

                  {headers.map((h, i) => (
                    <Tag
                      size={"lg"}
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
              <CreditsCheckerComponent hasCredits={hasCredits} onClickText={`Generate`} onClick={() => generatePrompt()} />
            </GridItem>

            <GridItem
              borderRadius="md"
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
                  fontWeight="bold"
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
                    {`lottie`}
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
                  width="auto"
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
              fontSize={{ base: "3xl" }}
              my={12}
            >
              Generated Prompt List
            </Text>
            {prompts.length === 0 && (
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontSize={{ base: "md" }}
              >
                No prompt generated...
              </Text>
            )}
            {prompts.length !== 0 && (
              <Box>
                <TokenResultsTableBuilder
                  body={prompts}
                  headers={["created", "prompt"]}
                  keys={["createdOn", "prompt"]}
                />
              </Box>
            )}
          </Box>
        </Box>
      )}

      {!isConnected && (
        <Flex justifyContent={"center"}>
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

const headers = ["Painter", "Actor", "Engineer"];
