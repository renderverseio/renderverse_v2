import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  TableContainer,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

import axios from "axios";

import DescriptionBox from "@/components/spaces/DescriptionBox";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";
import TokenTimeExchangeOptionsForm from "@/components/spaces/TokenTimeExchangeOptionsForm";


export default function PumpFinderSpace() {
  const { address, isConnected, connectWallet, } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected })
  const { tf, exchange, img, setImg, setTf, setExchange } = useTokenTimeExchange()

  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [pumpCoins, setPumpCoins] = useState([]);


  function exchangePumpCoins() {
    setLoaded(true);
    setIsSearched(true);
    axios
      .post("https://opai.renderverse.io/chart-pump", {
        exchange: exchange,
        wallet_address: address,
      })
      .then((res) => {
        setPumpCoins(res.data);
        setLoaded(false);
        setIsSearched(false);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(false);
        setIsSearched(false);
      });
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
          title={`AI TOKEN PUMP ANALYZER`}
          desc={`The tool operates in real-time, continuously monitoring market
          fluctuations and price movements to promptly identify any
          irregularities that may suggest a token pump.`} />
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
              onClick={exchangePumpCoins}
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
                <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr " }}>
                  <Box overflow={"scroll"}>
                    <Box>
                      {pumpCoins.length !== 0 && (
                        <TableContainer>
                          <TokenResultsTableBuilder
                            headers={["Coin", "New 24 High", "Time"]}
                            body={pumpCoins}
                            bodykeys={['coin', 'high', 'time']}
                          />
                        </TableContainer>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                </Grid>
              )}
            </GridItem>
          </Grid>
        </Box>
      ) : (
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
