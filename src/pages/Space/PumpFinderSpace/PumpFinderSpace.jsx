import { Box, } from "@chakra-ui/react";

import React, { useCallback, useState } from "react";

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";
import { useTokenTimeExchange } from "@/hooks/space/common/useTokenTimeExchange";

import SearchLoader from '@/components/spaces/SpacesLoader/SearchLoader';
import TokenTableHeader from '@/components/spaces/TokenTableHeader/TokenTableHeader';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import TokenResultsTableBuilder from '@/components/spaces/TokenResultsTableBuilder/TokenResultsTableBuilder';
import TokenTimeExchangeOptionsForm from '@/components/spaces/TokenTimeExchangeOptionsForm/TokenTimeExchangeOptionsForm';

import { TStatus } from "@/utils/status";


export default function PumpFinderSpace() {
  const { address, isConnected, } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected })
  const { tf, exchange, img, setImg, setTf, setExchange } = useTokenTimeExchange()

  const [pumpCoins, setPumpCoins] = useState([]);
  const [status, setStatus] = useState(TStatus.idle)


  const exchangePumpCoins = useCallback(
    async () => {
      setStatus(TStatus.fetching)
      try {
        const { data } = await spacesRequests.getPumpCoins({ exchange, address })
        if (data) {
          setPumpCoins([...data]);
          setStatus(TStatus.fetched)
        }
      } catch (err) {
        setStatus(TStatus.error)
        console.log(err)
      }
    }, [])

  return (
    <React.Fragment>
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
      {status === "fetching" && <SearchLoader status={status} />}
      {status === "fetched" &&
        <Box overflow={"scroll"}>
          <React.Fragment>
            <TokenTableHeader exchange={exchange} />
            <TokenResultsTableBuilder
              headers={["Coin", "New 24 High", "Time"]}
              body={pumpCoins}
              bodykeys={['coin', 'high', 'time']}
            />
          </React.Fragment>
        </Box>
      }
    </React.Fragment>
  );
}
