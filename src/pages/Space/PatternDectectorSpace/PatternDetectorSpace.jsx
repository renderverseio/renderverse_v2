
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

import axios from "axios";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import SearchLoader from '@/components/spaces/SpacesLoader/SearchLoader';
import TokenTableHeader from '@/components/spaces/TokenTableHeader/TokenTableHeader';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import TokenResultsTableBuilder from '@/components/spaces/TokenResultsTableBuilder/TokenResultsTableBuilder';
import TokenTimeExchangeOptionsForm from '@/components/spaces/TokenTimeExchangeOptionsForm/TokenTimeExchangeOptionsForm';



export default function PatternDetectorSpace() {

  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [pumpCoins, setPumpCoins] = useState([]);

  const { isConnected, address, connectWallet, } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected })

  const { exchange, tf, img, setTf, setExchange, setImg, } = useTokenTimeExchange()

  function exchangePumpCoins() {
    setLoaded(true);
    setIsSearched(true);
    axios
      .post("https://opai.renderverse.io/chart-patterns", {
        exchange: exchange,
        tf: tf,
        wallet_address: address,
        pair: "USDT",
      })
      .then((res) => {
        let p = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].lastPrice > 0.001) {
            p.push(res.data[i]);
          }
        }
        console.log(res.data);
        setPumpCoins(p);
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
              hasCredits={hasCredits}
              onClick={exchangePumpCoins}
              onClickText={"Get pump coins"}
            />

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
                {exchange} Pattern Coins
              </Text>
            </Box>

            <GridItem
              pos="relative"
              borderRadius="md"
            >
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
                      {pumpCoins.length !== 0 ? (
                        <TokenResultsTableBuilder
                          headers={[
                            "Coin",
                            "TF",
                            "Pattern",
                            "Resistance",
                            "Last Price",
                            "Support",
                          ]}
                          bodykeys={[
                            "coin",
                            "tf",
                            "pattern",
                            "resistance",
                            "lastPrice",
                            "support"
                          ]}
                          body={pumpCoins}
                        />
                      ) : null}
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
