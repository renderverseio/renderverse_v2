import { useState } from "react";

import { useCredits } from "@/hooks/common/useCredits";
import { useWallet } from "@/hooks/common/useWallet";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import SearchLoader from '@/components/spaces/SpacesLoader/SearchLoader';
import TokenTableHeader from '@/components/spaces/TokenTableHeader/TokenTableHeader';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import TokenResultsTableBuilder from '@/components/spaces/TokenResultsTableBuilder/TokenResultsTableBuilder';
import TokenTimeExchangeOptionsForm from '@/components/spaces/TokenTimeExchangeOptionsForm/TokenTimeExchangeOptionsForm';

import { TStatus } from "@/utils/status";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";


export default function TokenAnaylzerSpace() {

  const { isConnected, address } = useWallet()
  const { hasCredits } = useCredits({ isConnected, address })
  const { tf, img, exchange, setTf, setImg, setExchange } = useTokenTimeExchange()

  const [coins, setCoins] = useState([]);
  const [status, setStatus] = useState(TStatus.idle)


  async function getTokenAnalyzedCoins() {
    try {
      setStatus(TStatus.fetching)
      const { data } = await spacesRequests.getTokenAnalyzerCoins({ address, exchange, tf })
      setCoins([...data.topList]);
      setStatus(TStatus.fetched)
    } catch (err) {
      console.log(err)
      setStatus(TStatus.error)
    }
  }


  return (
    <React.Fragment>
      <TokenTimeExchangeOptionsForm
        exchange={exchange}
        tf={tf}
        setExchange={setExchange}
        setTf={setTf}
      />
      <CreditsCheckerComponent
        onClick={getTokenAnalyzedCoins}
        onClickText={"Analyze"}
        hasCredits={hasCredits}
      />
      <SearchLoader status={status} />
      {coins.length !== 0 && (
        <>
          <TokenTableHeader exchange={exchange} />
          <TokenResultsTableBuilder
            headers={[
              "Coin",
              "Time frame",
              "Global Score ",
              "Reversal Score",
              "Continuation Score",
            ]
            }
            body={coins}
            bodykeys={[
              "coin",
              "tf",
              "globalScore",
              "reversalScore",
              "continuationScore"
            ]}
          />
        </>
      )}
    </React.Fragment>
  );
}
