import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

import axios from "axios";

import { useCredits } from "@/hooks/common/useCredits";
import { useWallet } from "@/hooks/common/useWallet";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import DescriptionBox from "@/components/spaces/DescriptionBox";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";
import TokenTimeExchangeOptionsForm from "@/components/spaces/TokenTimeExchangeOptionsForm";


export default function TokenAnaylzerSpace() {

  const { isConnected, connectWallet, address } = useWallet()
  const { hasCredits } = useCredits({ isConnected, address })
  const { tf, img, exchange, setTf, setImg, setExchange } = useTokenTimeExchange()

  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [trendyCoins, setTrendyCoins] = useState([]);

  function getTrendyCoins() {
    setLoaded(true);
    setIsSearched(true);
    axios
      .post("https://opai.renderverse.io/chart-scans", {
        exchange: exchange,
        wallet_address: address,
        tf: tf,
      })
      .then((res) => {
        console.log(res.data);
        setTrendyCoins([...res.data.topList]);
        setLoaded(false);
        setIsSearched(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Box
    >
      <Box
        py={5}
        display={"grid"}
        px={8}
        borderRadius="md"
      >
        <DescriptionBox
          title={`AI TOKEN ANALYZER`}
          desc={`Integrating sentiment analysis algorithms, the tool gauges the
          overall market sentiment related to specific coins. This information
          can be valuable for understanding community perceptions and
          potential market trends.`}
        />
      </Box>
      {isConnected ? (
        <Box mt={12}>
          <Grid
            rowGap="1rem"
            columnGap={"1rem"}
            mx="auto"
            gridTemplateColumns={{
              base: "1fr",
              lg: "1fr",
            }}
          >
            <TokenTimeExchangeOptionsForm
              exchange={exchange}
              tf={tf}
              setExchange={setExchange}
              setTf={setTf}
            />
            <CreditsCheckerComponent
              onClick={getTrendyCoins}
              onClickText={"Analyze"}
              hasCredits={hasCredits}
            />
            <GridItem
              pos="relative"
              borderRadius="md"
            >
              <Box
                borderRadius={"md"}
                borderBottomRadius="none"
                px={2}
                py={1}
                border="2px"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs" }}
                >
                  {exchange} Trendy Coins
                </Text>
              </Box>
              {isSearched ? (
                <Box display={"flex"} justifyContent="center" py={12}>
                  {!loaded ? null : (
                    <Box maxH="256" maxW="256">
                      {`lottie`}
                    </Box>
                  )}
                </Box>
              ) : (
                <Grid gridTemplateColumns={{ base: "1fr" }}>
                  {trendyCoins.length !== 0 && (
                    <TokenResultsTableBuilder
                      headers={[
                        "Coin",
                        "Time frame",
                        "Global Score ",
                        "Reversal Score",
                        "Continuation Score",
                      ]
                      }
                      body={trendyCoins}
                      bodykeys={[
                        "coin",
                        "tf",
                        "globalScore",
                        "reversalScore",
                        "continuationScore"
                      ]}
                    />
                  )}
                </Grid>
              )}
            </GridItem>
          </Grid>
        </Box>
      ) : (
        <Flex mt={12} justifyContent={"center"}>
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </Flex>
      )
      }
    </Box >
  );
}
