import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useState } from "react";
import React from 'react'


import Bin from "@/assets/chart_spaces/binance.png";
import Kucoin from "@/assets/chart_spaces/kucoin.webp";
import Gate from "@/assets/chart_spaces/gateio.svg";

import DescriptionBox from "@/components/spaces/DescriptionBox";

import { useWallet } from "@/hooks/space/useWallet";
import { useCredits } from "@/hooks/space/ImageGeneration/useCredits";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";


export default function TokenTrackerSpace() {
  const [img, setImg] = useState(Bin);

  const { isConnected, address, connectWallet, disconnect } = useWallet()
  const { credits, hasCredits } = useCredits({ isConnected, address })

  const checks = ["binance", "kucoin", "gate"];
  const [exchange, setExchange] = useState("binance");
  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [getCoins, setGetCoins] = useState([]);


  async function getTrendyCoins() {
    setLoaded(true);
    setIsSearched(true);
    const { data } = await spacesRequests.getCoinTrackerCoins({ address, exchange })
    setGetCoins([...data.topList]);
    setLoaded(false);
    setIsSearched(false);
  }



  return (
    <React.Fragment>
      <Box pos="relative">
        <DescriptionBox
          title={`AI TOKEN TRACKER`}
          desc={`Leveraging AI algorithms, the tracker may offer price prediction
            models for selected cryptocurrencies based on historical data and
            market trends, aiding users in making informed future investment
            decisions.`} />

        {isConnected ? (
          <Box bg="white" boxShadow={"lg"} mt={12}>
            <Grid
              rowGap="1rem"
              columnGap={"1rem"}
              mx="auto"
            >
              <GridItem>
                <FormControl
                  p={{ base: 2, lg: 8 }}
                  borderRadius="md"
                >
                  <FormLabel
                    fontSize={{ base: "lg" }}
                  >
                    Exchange
                  </FormLabel>
                  <RadioGroup
                    onChange={(s) => {
                      if (s === "binance") setImg(Bin);
                      if (s === "kucoin") setImg(Kucoin);
                      if (s === "gate") setImg(Gate);
                      setExchange(s);
                      setGetCoins([]);
                    }}
                    value={exchange}
                  >
                    <Stack direction="row">
                      {checks.map((c, i) => (
                        <Radio value={c} key={i} colorScheme="purple">
                          <Text
                            size={{ base: "sm", lg: "lg" }}
                          >
                            {c}
                          </Text>
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <Flex justifyContent={"center"} alignItems="center">
                  {hasCredits ? (
                    <Button
                      onClick={() => getTrendyCoins()}
                    >
                      Anaylze
                    </Button>
                  ) : (
                    <Box>
                      <Text
                        fontWeight="bold"
                        size={{ base: "sm", lg: "lg" }}
                      >
                        Oops credits has expired, please contact team
                      </Text>
                    </Box>
                  )}
                </Flex>
              </GridItem>

              <GridItem
                pos="relative"
                borderRadius="md"
              >
                <Box
                  px={2}
                  py={1}
                  border="2px"
                >
                  <Text fontSize={{ base: "xs" }}>
                    {exchange} Trendy Coins
                  </Text>
                </Box>
                {isSearched ? (
                  <Box display={"flex"} justifyContent="center" py={12}>
                    {!loaded ? null : (
                      <Box maxH="256" maxW="256">
                        {'lottie'}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Grid gridTemplateColumns={{ base: "1fr" }}>
                    {getCoins.length !== 0 && (
                      <TokenResultsTableBuilder headers={[
                        "Coin",
                        "Global Score ",
                        "Reversal Score",
                        "Continuation Score",
                        "Time Frame",
                        "Pattern",
                      ]}
                        bodyKeys={[
                          'coin',
                          "globalScore",
                          "continuationScore",
                          "reversalScore",
                          "pattern"
                        ]}
                        body={getCoins}
                      />
                    )}
                  </Grid>
                )}
              </GridItem>
            </Grid>
          </Box>
        ) : (
          <Flex mt={12} justifyContent={"center"}>
            <Button onClick={connectWallet}>
              Connect Wallet
            </Button>

          </Flex>
        )}
      </Box>
    </React.Fragment >
  );
}
