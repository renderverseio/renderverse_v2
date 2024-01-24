/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
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
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import BG from "/public/bg/16.jpg";
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/c.json";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import SpaceNavbar from "../../components/spaces/SpaceNavbar";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";

import Bin from "/public/logos/binance.png";
import Kucoin from "/public/logos/kucoin.webp";
import Gate from "/public/logos/gateio.svg";

export default function TokenAnaylzerSpace() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const [img, setImg] = useState(Bin);
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  const checks = ["binance", "kucoin", "gate"];
  const [exchange, setExchange] = useState("binance");
  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [trendyCoins, setTrendyCoins] = useState([]);
  const [credits, setCredits] = useState();
  const [hasCredits, setHasCredits] = useState();

  const [tf, setTf] = useState("15m");
  const tfs = ["15m", "1h", "4h", "1d"];

  useEffect(() => {
    axios
      .post("https://opai.renderverse.io/credits", {
        wallet_address: address,
      })
      .then((res) => {
        console.log(res);
        let c = res.data.credits;
        setCredits(c);
        if (c > 0) setHasCredits(true);
        else setHasCredits(false);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(false);
        setIsSearched(false);
      });
  }, [isConnected]);

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
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
    >
      <SpaceNavbar
        disconnect={() => disconnect()}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
        credits={credits}
      />
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        p={{ base: 2, lg: 12 }}
        mt={12}
      >
        <Box
          py={5}
          display={"grid"}
          px={8}
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
            AI TOKEN ANALYZER
          </Text>

          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            Integrating sentiment analysis algorithms, the tool gauges the
            overall market sentiment related to specific coins. This information
            can be valuable for understanding community perceptions and
            potential market trends.
          </Text>
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
                  p={{ base: 2, lg: 8 }}
                  bg={`rgba(0,0,0,.5)`}
                  boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                  borderRadius="md"
                >
                  <FormLabel
                    fontFamily={fonts.headingFont}
                    fontSize={{ base: "lg" }}
                    fontWeight="bold"
                    color={colors.highLightColor}
                  >
                    Exchange
                  </FormLabel>

                  <RadioGroup
                    onChange={(s) => {
                      if (s === "binance") setImg(Bin);
                      if (s === "kucoin") setImg(Kucoin);
                      if (s === "gate") setImg(Gate);
                      setExchange(s);
                      setTrendyCoins([]);
                    }}
                    value={exchange}
                  >
                    <Stack direction="row">
                      {checks.map((c, i) => (
                        <Radio value={c} key={i} colorScheme="purple">
                          <Text
                            color={colors.boxBorder}
                            fontWeight="bold"
                            size={{ base: "sm", lg: "lg" }}
                            fontFamily={fonts.parafont}
                          >
                            {c}
                          </Text>
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>

                  <Box>
                    <FormLabel
                      fontFamily={fonts.headingFont}
                      fontSize={{ base: "lg" }}
                      fontWeight="bold"
                      color={colors.highLightColor}
                    >
                      Time Frame
                    </FormLabel>
                    <RadioGroup
                      onChange={(s) => {
                        if (s === "binance") setImg(Bin);
                        if (s === "kucoin") setImg(Kucoin);
                        if (s === "gate") setImg(Gate);
                        setTf(s);
                        setTrendyCoins([]);
                      }}
                      value={tf}
                    >
                      <Stack direction="row">
                        {tfs.map((c, i) => (
                          <Radio value={c} key={i} colorScheme="purple">
                            <Text
                              color={colors.boxBorder}
                              fontWeight="bold"
                              size={{ base: "sm", lg: "lg" }}
                              fontFamily={fonts.parafont}
                            >
                              {c}
                            </Text>
                          </Radio>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Box py={4}>
                    <Flex justifyContent={"center"} alignItems="center">
                      {hasCredits ? (
                        <ConnectWalletButton
                          onClick={() => getTrendyCoins()}
                          title={`Anaylze`}
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
                </FormControl>
              </GridItem>

              <GridItem
                pos="relative"
                bg={`rgba(0,0,0,.5)`}
                boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
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
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
                    fontSize={{ base: "xs" }}
                  >
                    {exchange} Trendy Coins
                  </Text>
                </Box>
                {isSearched ? (
                  <Box display={"flex"} justifyContent="center" py={12}>
                    {!loaded ? null : (
                      <Box maxH="256" maxW="256">
                        <Lottie animationData={groovyWalkAnimation} />
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Grid gridTemplateColumns={{ base: "1fr" }}>
                    <Box>
                      <Box>
                        {trendyCoins.length !== 0 ? (
                          <Table>
                            <Thead>
                              {[
                                "Coin",
                                "Time frame",
                                "Global Score ",
                                "Reversal Score",
                                "Continuation Score",
                              ].map((t, h) => (
                                <Th
                                  color={"white"}
                                  fontFamily={fonts.specialFont}
                                  key={h}
                                >
                                  {t}
                                </Th>
                              ))}
                            </Thead>
                            <Tbody>
                              {trendyCoins.map((tc, i) => (
                                <Tr p={2} key={i}>
                                  <Td
                                    justifyContent={"space-between"}
                                    alignItems="center"
                                  >
                                    <Flex
                                      columnGap={".25rem"}
                                      alignItems={"center"}
                                    >
                                      <Image mr={2} maxW={8} src={img} />
                                      <Text
                                        fontFamily={fonts.specialFont}
                                        color={colors.fontLightColorV2}
                                        fontSize="2xl"
                                      >
                                        {tc.coin.replace("USDT", "")}
                                      </Text>
                                      <Text
                                        fontFamily={fonts.parafont}
                                        color={colors.fontLightColorV2}
                                        fontSize={{ base: "sm" }}
                                        fontWeight="bold"
                                      >
                                        USDT
                                      </Text>
                                    </Flex>
                                  </Td>

                                  <Td>
                                    <Text
                                      fontFamily={fonts.parafont}
                                      color={colors.fontLightColor}
                                    >
                                      {tf}
                                    </Text>
                                  </Td>

                                  <Td>
                                    <Text
                                      fontFamily={fonts.parafont}
                                      color={colors.fontLightColor}
                                    >
                                      {tc.globalScore}
                                    </Text>
                                  </Td>
                                  <Td>
                                    <Text
                                      fontFamily={fonts.parafont}
                                      color={colors.fontLightColor}
                                    >
                                      {tc.reversalScore}
                                    </Text>
                                  </Td>

                                  <Td>
                                    <Text
                                      fontFamily={fonts.parafont}
                                      color={colors.fontLightColor}
                                    >
                                      {tc.continuationScore}
                                    </Text>
                                  </Td>
                                </Tr>
                              ))}
                            </Tbody>
                          </Table>
                        ) : null}
                      </Box>
                    </Box>
                  </Grid>
                )}
              </GridItem>
            </Grid>
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
