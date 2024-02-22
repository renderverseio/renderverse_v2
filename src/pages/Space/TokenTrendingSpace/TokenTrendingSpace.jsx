import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Table,
  Tag,
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
import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";
import DescriptionBox from "@/components/custom/DescriptionBox/DescriptionBox";
import useUNISatWallet from "@/blockchain/useUNISatWallet";
import Back from "@/components/common/Back/Back";

export default function TokenTrendingSpace() {
  const { wallet } = useWalletStore((state) => state);
  const { address, isConnected, balance } = wallet;
  const { hasCredits } = useCredits({ address, isConnected });

  const { connectWallet, disconnect } = useUNISatWallet();

  const [coins, setCoins] = useState([]);
  const [status, setStatus] = useState(TStatus.idle);

  const getCoins = useCallback(async () => {
    setStatus(TStatus.fetching);
    try {
      const { data } = await spacesRequests.getTrendingCoins({
        address,
      });
      console.log(data);
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
      <Container display={"grid"} rowGap={"2rem"} mt={12} maxW="90%" mx="auto">
        <Back />
        <DescriptionBox
          title="Crypto Trend GPT"
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem quo veritatis unde ipsa voluptate possimus odio ipsum sequi, vero sit autem! Minus vero expedita sed provident non optio aut.`}
        />
        <Flex
          alignItems={"center"}
          rowGap="2rem"
          flexDir={"column"}
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
            <Flex p={5} justifyContent={"center"}>
              <Box
                p={4}
                borderRadius={"lg"}
                boxShadow={"lg"}
                fontWeight={"bold"}
                className="btn btn-1"
                onClick={connectWallet}
              >
                Connect Wallet
              </Box>
            </Flex>
          )}

          {status === "fetching" && <GridLoader color="gray" />}
        </Flex>

        {status === "fetched" && (
          <Grid
            templateColumns={{
              base: "1fr",
              xl: "1fr 1fr",
              "2xl": "1fr 1fr",
            }}
            rowGap="2rem"
            columnGap={"2rem"}
            p={8}
          >
            {coins.map((coin, i) => (
              <Box
                p={4}
                boxShadow="lg"
                className="glass_effect"
                borderRadius={"lg"}
                border="2px"
                borderColor={"white"}
                key={i}
              >
                <CHeading
                  size={2}
                  cprops={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: ".4rem",
                  }}
                  title={
                    <>
                      <Image maxW="12" src={coin.image} />
                      <span>{String(coin.name).toUpperCase()}</span>
                      <CText
                        size={2}
                        title={`($${String(coin.symbol).toUpperCase()})`}
                      />
                    </>
                  }
                />
                <Divider mt={4} />

                <Table colorScheme="cyan">
                  <Tbody>
                    <Tr>
                      <Td>Current Price</Td>
                      <Td>
                        {String(coin["current_price"]).toLocaleString()} USDT
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>7d change</Td>
                      <Td>
                        <Tag
                          bg={coin["7d_change"] >= 0 ? "green.600" : "red.600"}
                          color="white"
                        >
                          {coin["7d_change"]}%
                        </Tag>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>24h change</Td>
                      <Td>
                        <Tag
                          bg={coin["24h_change"] >= 0 ? "green.600" : "red.600"}
                          color="white"
                        >
                          {coin["24h_change"]}%
                        </Tag>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Total Circulating Supply</Td>
                      <Td>
                        {String(coin.circulating_supply).toLocaleString()}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Total Supply</Td>
                      <Td>{String(coin.total_supply).toLocaleString()}</Td>
                    </Tr>
                    <Tr>
                      <Td>Marketcap</Td>
                      <Td>{String(coin.market_cap).toLocaleString()}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            ))}
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
}
