import React from 'react'

import { useState } from "react";
import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import { TStatus } from "@/utils/status";

import SearchLoader from '@/components/spaces/SpacesLoader/SearchLoader';
import TokenTableHeader from '@/components/spaces/TokenTableHeader/TokenTableHeader';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import TokenResultsTableBuilder from '@/components/spaces/TokenResultsTableBuilder/TokenResultsTableBuilder';
import TokenTimeExchangeOptionsForm from '@/components/spaces/TokenTimeExchangeOptionsForm/TokenTimeExchangeOptionsForm';

export default function TokenTrackerSpace() {

  const { isConnected, address, } = useWallet()
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
      console.log(err)
      setStatus(TStatus.error)
    }
  }

  return (
    <React.Fragment>
      {isConnected && (
        <React.Fragment>
          <TokenTimeExchangeOptionsForm
            tf={tf}
            setTf={setTf}
            exchange={exchange}
            setExchange={setExchange}
            setImg={setImg}
          />
          <CreditsCheckerComponent
            onClick={getTrendyCoins}
            onClickText={"Analyze"}
            hasCredits={hasCredits}
          />
          <SearchLoader status={status} />
          {getCoins.length !== 0 && (
            <>
              <TokenTableHeader exchange={exchange} />
              <TokenResultsTableBuilder
                headers={[
                  "Coin",
                  "Global Score",
                  "Reversal Score",
                  "Continuation Score",
                  "Time Frame",
                  "Pattern",
                ]}
                bodykeys={[
                  "coin",
                  "globalScore",
                  "reversalScore",
                  "continuationScore",
                  "tf",
                  "pattern"
                ]}
                body={getCoins}
              />
            </>
          )}
        </React.Fragment>
      )}
    </React.Fragment >
  );
}
