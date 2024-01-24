/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
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
  Tbody,
  Td,
  Text,
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

export default function PatternDetectorSpace() {
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
  const tfs = ["15m", "1h", "4h", "1d"];
  // const pairs = ["USDT", "BTC"];

  const [exchange, setExchange] = useState("binance");
  const [tf, setTf] = useState("15m");
  // const [pair, setPair] = useState("USDT");
  const [loaded, setLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [pumpCoins, setPumpCoins] = useState([]);
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
        setIsSearched(false);
      });
  }, [isConnected]);

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
            AI TOKEN PATTERN ANALYZER
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            The analyzer employs a sophisticated pattern recognition algorithm
            to identify a variety of chart patterns, including but not limited
            to triangles, flags, head and shoulders, and more. This helps users
            anticipate potential price movements.
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
                  display={"grid"}
                  rowGap="2rem"
                  gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                  p={{ base: 2, lg: 8 }}
                  bg={`rgba(0,0,0,.5)`}
                  boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                  borderRadius="md"
                >
                  <Box>
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
                        setPumpCoins([]);
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
                  </Box>

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
                        setPumpCoins([]);
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
                  {/* 
                  <Box>
                    <FormLabel
                      fontFamily={fonts.headingFont}
                      fontSize={{ base: "lg" }}
                      fontWeight="bold"
                      color={colors.highLightColor}
                    >
                      Pair
                    </FormLabel>
                    <RadioGroup
                      onChange={(s) => {
                        if (s === "binance") setImg(Bin);
                        if (s === "kucoin") setImg(Kucoin);
                        if (s === "gate") setImg(Gate);
                        setPair(s);
                        setPumpCoins([]);
                      }}
                      value={pair}
                    >
                      <Stack direction="row">
                        {pairs.map((c, i) => (
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
                  </Box> */}
                </FormControl>

                <Box py={4}>
                  <Flex justifyContent={"center"} alignItems="center">
                    {hasCredits ? (
                      <ConnectWalletButton
                        onClick={() => exchangePumpCoins()}
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
                    {exchange} Pattern Coins
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
                  <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr " }}>
                    <Box overflow={"scroll"}>
                      <Box>
                        {pumpCoins.length !== 0 ? (
                          <Table p={4}>
                            <Thead>
                              <Tr>
                                {[
                                  "Coin",
                                  "TF",
                                  "Pattern",
                                  "Resistance",
                                  "Last Price",
                                  "Support",
                                ].map((i, s) => (
                                  <Td
                                    fontFamily={fonts.headingFont}
                                    color={colors.fontLightColorV2}
                                    fontSize={{ base: "sm" }}
                                    fontWeight="bold"
                                    key={s}
                                  >
                                    {i}
                                  </Td>
                                ))}
                              </Tr>
                            </Thead>
                            <Tbody>
                              {pumpCoins.map((tc, i) => (
                                <Tr key={i}>
                                  <Td>
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
                                        {tc.coin}
                                      </Text>
                                    </Flex>
                                  </Td>

                                  <Td>
                                    <Text
                                      fontFamily={fonts.headingFont}
                                      color={colors.fontLightColor}
                                    >
                                      {tc.tf}
                                    </Text>
                                  </Td>
                                  <Td>
                                    <Text
                                      fontFamily={fonts.headingFont}
                                      color={colors.fontLightColor}
                                    >
                                      {tc.pattern}
                                    </Text>
                                  </Td>
                                  <Td>
                                    <Text
                                      fontFamily={fonts.headingFont}
                                      color={colors.fontLightColor}
                                    >
                                      {Number(tc.resistance).toFixed(4)}
                                    </Text>
                                  </Td>
                                  <Td>
                                    <Text
                                      fontFamily={fonts.headingFont}
                                      color={colors.fontLightColorV2}
                                    >
                                      {Number(tc.lastPrice).toFixed(4)}
                                    </Text>
                                  </Td>
                                  <Td>
                                    <Text
                                      fontFamily={fonts.headingFont}
                                      color={colors.fontLightColor}
                                    >
                                      {Number(tc.support).toFixed(4)}
                                    </Text>
                                  </Td>
                                </Tr>
                              ))}
                            </Tbody>
                          </Table>
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
