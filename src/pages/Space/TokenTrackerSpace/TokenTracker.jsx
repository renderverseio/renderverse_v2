import {
  Box,
  Flex,
  Button,
  Grid,
} from "@chakra-ui/react";

import { useState } from "react";

import React from 'react'

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import SearchLoader from "@/components/spaces/SearchLoader";
import DescriptionBox from "@/components/spaces/DescriptionBox";
import TokenTableHeader from "@/components/spaces/TokenTableHeader";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent";
import TokenResultsTableBuilder from "@/components/spaces/TokenResultsTableBuilder";
import TokenTimeExchangeOptionsForm from "@/components/spaces/TokenTimeExchangeOptionsForm";

import { TStatus } from "@/utils/status";

export default function TokenTrackerSpace() {

  const { isConnected, address, connectWallet, } = useWallet()
  const { hasCredits } = useCredits({ isConnected, address })
  const { setExchange, setImg, setTf, tf, exchange, img } = useTokenTimeExchange()

  const [status, setStatus] = useState(TStatus.idle)
  const [getCoins, setGetCoins] = useState([]);


  async function getTrendyCoins() {
    try {
      setStatus(TStatus.fetching)
      const { data } = await spacesRequests.getCoinTrackerCoins({ address, exchange })
      setGetCoins([...data.topList]);
      setStatus(TStatus.fetched)
    } catch (err) {
      setStatus(TStatus.error)
    }
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

        {isConnected && (
          <Box bg="white" boxShadow={"lg"} mt={12}>
            <Grid
              rowGap="1rem"
              columnGap={"1rem"}
              mx="auto"
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
              <TokenTableHeader exchange={exchange} />
              <SearchLoader status={status} />
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
            </Grid>
          </Box>
        )}

        {!isConnected && (
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
