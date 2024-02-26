import {
  Box,
  Container,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import React, { useCallback, useState } from "react";
import { Grid as GridLoader } from "react-loader-spinner";

import { useCredits } from "@/hooks/common/useCredits";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";
import CreditsCheckerComponent from "@/components/image_generation_space/CreditsCheckerComponent/CreditsCheckerComponent";

import { TStatus } from "@/utils/status";
import { useWalletStore } from "@/blockchain/useWalletStore";

import DescriptionBox from "@/components/custom/DescriptionBox/DescriptionBox";
import useUNISatWallet from "@/blockchain/useUNISatWallet";
import Back from "@/components/common/Back/Back";
import CCard from "@/components/custom/CCard/CCard";
import { gradientBgs } from "@/data/home/homeData";

export default function TokenTopSpace() {
  const { wallet } = useWalletStore((state) => state);
  const { address, isConnected } = wallet;
  const { connectWallet } = useUNISatWallet();
  const { hasCredits } = useCredits({ address, isConnected });

  const [coins, setCoins] = useState([]);
  const [status, setStatus] = useState(TStatus.idle);

  const getCoins = useCallback(async () => {
    setStatus(TStatus.fetching);
    try {
      const { data } = await spacesRequests.getTopCoins({
        address,
      });
      console.log(data.coins);
      if (data) {
        setCoins([...data.coins]);
        setStatus(TStatus.fetched);
      }
    } catch (err) {
      setStatus(TStatus.error);
      console.log(err);
    }
  }, []);

  return (
    <React.Fragment>
      <Container display={"grid"} rowGap={"2rem"} my={12} maxW="90%" mx="auto">
        <Back />
        <DescriptionBox
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda minima optio quia sint error fugit cupiditate laborum tenetur eos eius ut non eveniet quo, quae deserunt accusamus? Placeat, quis.`}
          title={`Crypto Trade GPT`}
        />

        <Flex
          flexDir={"column"}
          rowGap="2rem"
          alignItems={"center"}
          justifyContent={"center"}
        >
          {isConnected && (
            <CreditsCheckerComponent
              onClick={getCoins}
              onClickText={"Get Coins"}
              hasCredits={hasCredits}
            />
          )}
          {!isConnected && (
            <Box
              onClick={() => connectWallet()}
              fontWeight={"bold"}
              className="btn btn-1"
              p={3}
              borderRadius="lg"
              boxShadow={"lg"}
            >
              Connect Wallet
            </Box>
          )}

          {status === "fetching" && <GridLoader color="gray" />}
        </Flex>

        {status === "fetched" && (
          <CCard
            type="s"
            props={{
              minH: "100%",
              borderRadius: "lg",
              h: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              border: "2px",
              borderColor: "white",
              bg: "gray.50",
              boxShadow: "sm",
              columnGap: "2rem",
              bgImg: gradientBgs[4].bgImg,
            }}
          >
            <Table>
              <Thead>
                <Tr>
                  <Th>{`name`}</Th>
                  <Th>{`15m`}</Th>
                  <Th>{`1h`}</Th>
                  <Th>{`4h`}</Th>
                  <Th>{`1d`}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {coins.map((coin, i) => (
                  <Tr key={i}>
                    <Td>{coin.coin}</Td>
                    <Td>{coin.tf.t15m}</Td>
                    <Td>{coin.tf.t1h}</Td>
                    <Td>{coin.tf.t4h}</Td>
                    <Td>{coin.tf.t1d}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CCard>
        )}
      </Container>
    </React.Fragment>
  );
}
