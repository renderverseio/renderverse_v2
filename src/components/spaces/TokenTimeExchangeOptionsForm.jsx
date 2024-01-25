import React from 'react'

import Bin from "@/assets/exchange_logos/binance.png";
import Gate from "@/assets/exchange_logos/gateio.svg";
import Kucoin from "@/assets/exchange_logos/kucoin.webp";

import { FormControl, FormLabel, RadioGroup, Radio, Stack, Box, Text } from '@chakra-ui/react';

const TokenTimeExchangeOptionsForm = ({ exchange, setExchange, tf, setTf, }) => {

  const checks = ["binance", "kucoin", "gate"];
  const tfs = ["15m", "1h", "4h", "1d"];

  return (
    <React.Fragment>
      <FormControl
        display={"grid"}
        rowGap="2rem"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        p={{ base: 2, lg: 8 }}
        borderRadius="md"
      >
        <Box>
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
        </Box>

        <Box>
          <FormLabel
            fontSize={{ base: "lg" }}
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
                    size={{ base: "sm", lg: "lg" }}
                  >
                    {c}
                  </Text>
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
      </FormControl>
    </React.Fragment>
  )
}

export default TokenTimeExchangeOptionsForm
