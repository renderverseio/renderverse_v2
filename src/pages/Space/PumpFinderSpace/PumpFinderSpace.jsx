import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";


import Bin from "@/assets/chart_spaces/binance.png";
import Kucoin from "@/assets/chart_spaces/kucoin.webp";
import Gate from "@/assets/chart_spaces/gateio.svg";

import { useWallet } from "@/hooks/space/useWallet";
import DescriptionBox from "@/components/spaces/DescriptionBox";
import { useCredits } from "@/hooks/space/ImageGeneration/useCredits";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";

export default function PumpFinderSpace() {
  const { address, isConnected, disconnect, connectWallet, balance } = useWallet()
  const { credits, hasCredits } = useCredits({ address, isConnected })
  const [img, setImg] = useState(Bin);


  const checks = ["binance", "kucoin", "gate"];
  const [exchange, setExchange] = useState("binance");
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
            <GridItem>
              <FormControl
                bg="white"
                p={{ base: 2, lg: 8 }}
                borderRadius="md"
              >
                <FormLabel
                  fontSize={{ base: "lg" }}
                  fontWeight="bold"
                >
                  Exchange
                </FormLabel>

                <RadioGroup
                  onChange={(s) => {
                    if (s === "binance") setImg(Bin);
                    if (s === "kucoin") setImg(Kucoin);
                    if (s === "gate") setImg(Gate);
                    setExchange(s);
                    setPumpCoins([]);
                  }}
                  value={exchange}
                >
                  <Stack direction="row">
                    {checks.map((c, i) => (
                      <Radio value={c} key={i} colorScheme="purple">
                        <Text
                          fontWeight="bold"
                          size={{ base: "sm", lg: "lg" }}
                        >
                          {c}
                        </Text>
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Box py={4}>
                <Flex justifyContent={"center"} alignItems="center">
                  {hasCredits ? (
                    <Button
                      onClick={() => exchangePumpCoins()}
                    >          Anaylze
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
              </Box>
            </GridItem>

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
