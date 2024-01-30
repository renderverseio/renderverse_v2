import React from 'react'

import Bin from "@/assets/exchange_logos/binance.png";
import Gate from "@/assets/exchange_logos/gateio.svg";
import Kucoin from "@/assets/exchange_logos/kucoin.webp";

import { FormControl, RadioGroup, Radio, Stack, Box, } from '@chakra-ui/react';

import CText from '@/components/typography/CText/CText';
import CCard from '@/components/custom/CCard/CCard';

const TokenTimeExchangeOptionsForm = ({ exchange, setExchange, tf, setTf, setImg, }) => {

  const checks = ["binance", "kucoin", "gate"];
  const tfs = ["15m", "1h", "4h", "1d"];

  return (
    <React.Fragment>
      <CCard type="s">
        <FormControl
          p={{ base: 2, lg: 8 }}
          display={"grid"}
          rowGap="2rem"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          borderRadius="md"
        >
          <Box>
            <CText size={2} title="Exchange" />
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
                    <CText size={3} title={c} />
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>

          <Box>
            <CText size={2} title="Time Frame" />
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
                    <CText size={3} title={c} />
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        </FormControl>
      </CCard>
    </React.Fragment>
  )
}


export default TokenTimeExchangeOptionsForm
