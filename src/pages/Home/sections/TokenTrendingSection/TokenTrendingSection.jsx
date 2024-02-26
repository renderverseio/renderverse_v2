import Marquee from "react-fast-marquee";
import CHeading from "@/components/typography/CHeading/CHeading";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
  Table,
  Tag,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import CText from "@/components/typography/CText/CText";

export default function TokenTrendingSection() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("https://opai.renderverse.io/trending")
      .then((res) => {
        const { data } = res;
        setTrending([...data.coins]);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <Box
      bgImg={
        "linear-gradient(112.9deg, #FFFAEE -0.14%, #FFF0EE 45.98%, #FFEEFC 100.47%)"
      }
      pt={6}
      pb={12}
    >
      <Flex my={6} py={6} justifyContent="center">
        <CHeading title={`Trending Coins`} size={1} />
      </Flex>

      <Marquee>
        {trending.map((coin, i) => (
          <Grid mx={4}>
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

            <Table
              border="2px"
              borderColor={"white"}
              boxShadow="lg"
              borderRadius={"lg"}
              key={i}
              colorScheme="cyan"
            >
              <Tbody>
                <Tr>
                  <Td>Current Price</Td>
                  <Td>{String(coin["current_price"]).toLocaleString()} USDT</Td>
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
                  <Td>{String(coin.circulating_supply).toLocaleString()}</Td>
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
          </Grid>
        ))}
      </Marquee>
    </Box>
  );
}
