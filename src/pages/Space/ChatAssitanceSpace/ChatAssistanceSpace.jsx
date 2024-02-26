import {
  Box,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import Back from "@/components/common/Back/Back";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import DescriptionBox from "@/components/custom/DescriptionBox/DescriptionBox";

import { useRef } from "react";
import { useCredits } from "@/hooks/common/useCredits";
import { useWalletStore } from "@/blockchain/useWalletStore";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";

import useUNISatWallet from "@/blockchain/useUNISatWallet";

import { gradientBgs } from "@/data/home/homeData";
import { SiProbot } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import CreditsCheckerComponent from "@/components/image_generation_space/CreditsCheckerComponent/CreditsCheckerComponent";

export default function ChatAssistanceSpace() {
  const { connectWallet } = useUNISatWallet();
  const { wallet } = useWalletStore((state) => state);
  const { address, isConnected } = wallet;
  const { hasCredits } = useCredits({ address, isConnected });

  const [queue, setQueue] = useState([
    "Welcome to TradeGPT, your personal AI investment assistant. Need suggestions about hot coins, market trends, trading strategies, technical analysis? I'm here to help! I'll guide you with technical and market insights based on Bybit's data.",
  ]);
  const [text, setText] = useState("");

  const generateChatPrompt = async () => {
    try {
      let q = queue;
      queue.push("Thinking...!");
      setQueue([...q]);
      const { data } = await spacesRequests.generateChatPrompt({
        text,
      });
      if (data) {
        q.pop();
        setQueue([...q]);
        queue.push(data.text);
        setQueue([...q]);
        setText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ref = useRef(null);

  const scrollToLastFruit = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastFruit();
  }, [queue]); // 👈 empty deps array

  useEffect(() => {
    async function deductCredit() {
      const { data } = await spacesRequests.generateChatPromptEntry({
        address,
      });
      console.log(data);
    }
    if (address) {
      deductCredit();
    }
  }, [address]);

  return (
    <React.Fragment>
      <Container display={"grid"} rowGap={"2rem"} mt={12} maxW="90%" mx="auto">
        <Back />
        <DescriptionBox
          title="Brain GPT"
          desc={`Have a conversation with our personalized AI chat assistant and ask for suggestions on hot coins, market trends, trading strategies, technical analysis and much more.`}
        />

        <CCard
          type="s"
          props={{
            p: 4,
            borderRadius: "lg",
            border: "2px",
            borderColor: "white",
            bg: "gray.50",
            boxShadow: "sm",
            my: 12,
          }}
        >
          {hasCredits && isConnected && (
            <>
              <Box
                display={"grid"}
                rowGap="2rem"
                maxH="60vh"
                overflowY={"scroll"}
                mb={6}
                pb={6}
                ref={ref}
              >
                {queue.map((q, i) => (
                  <Flex alignItems={"center"} columnGap="1rem" key={i}>
                    <Icon
                      p={2}
                      boxShadow="lg"
                      border="2px"
                      borderColor="white"
                      borderRadius={"2xl"}
                      h={12}
                      color="gray.600"
                      w={12}
                      bg={i % 2 === 0 ? "green.100" : "blue.100"}
                      as={i % 2 === 0 ? SiProbot : FaUserAstronaut}
                    />
                    <Box
                      transform={`translateY(8px)`}
                      display={"flex"}
                      alignItems="flex-end"
                      p={2}
                      boxShadow="lg"
                      bg={i % 2 === 0 ? "green.100" : "blue.100"}
                      border="2px"
                      borderColor="white"
                      borderRadius={"2xl"}
                      borderTopLeftRadius="none"
                      color="gray.600"
                    >
                      <CText size={3} title={q} />
                    </Box>
                  </Flex>
                ))}
              </Box>
              <Flex alignItems={"center"} columnGap={"1rem"}>
                <InputGroup w="96%" mx="auto">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                  >
                    <Icon
                      p={2}
                      h={10}
                      w={10}
                      color="gray.600"
                      as={FaUserAstronaut}
                    />
                  </InputLeftElement>
                  <Input
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        let q = queue;
                        let v = e.target.value;
                        queue.push(v);
                        setQueue([...q]);
                        generateChatPrompt();
                      }
                    }}
                    bg="gray.100"
                    border="2px"
                    boxShadow="lg"
                    color="gray.600"
                    borderColor="white"
                    borderRadius={"md"}
                  />
                </InputGroup>
                <Flex
                  borderRadius={"lg"}
                  boxShadow="lg"
                  bgImage={gradientBgs[1].bgImg}
                  px={4}
                  py={2}
                  alignItems={"center"}
                  justifyContent="center"
                  onClick={() => {
                    let q = queue;
                    queue.push(text);
                    setQueue([...q]);
                    generateChatPrompt();
                  }}
                >
                  <CText title={`Send`} size={2} />
                </Flex>
              </Flex>
            </>
          )}
          {!hasCredits && isConnected && (
            <CreditsCheckerComponent hasCredits={hasCredits} />
          )}
          {!isConnected && (
            <Flex justifyContent={"center"}>
              <Box
                onClick={connectWallet}
                className="btn btn-1"
                p={3}
                borderRadius="lg"
                boxShadow={"lg"}
              >
                Connect Wallet
              </Box>
            </Flex>
          )}
        </CCard>
      </Container>
    </React.Fragment>
  );
}

// Market Summary
// All metrics are based on data from Bybit over the past 24 hours.
// Market Sentiment
// 74Greed
// Popular Coins
// SOL
// SOL
// +2.24%
// JASMY
// JASMY
// +47.56%

// Are there any significant news in today's cryptocurrency market, and based on these news generate an analysis report
// Conduct a one-month analysis of SOL's price movements, using technical indicators and news sentiment to determine the reasons behind the trends. Summarize the findings in a report
// Analyze JASMY today, then suggest at least 3 trading strategies suitable, explain why and strategy's characteristics. The strategies should include the direction, entry price, and so on.
// What are the crypto coins that might go up in the next hour? And elaborate on why
