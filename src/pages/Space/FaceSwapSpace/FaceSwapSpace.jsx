import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import axios from "axios";

import SearchLoader from '@/components/spaces/SpacesLoader/SearchLoader';
import TokenTableHeader from '@/components/spaces/TokenTableHeader/TokenTableHeader';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import TokenResultsTableBuilder from '@/components/spaces/TokenResultsTableBuilder/TokenResultsTableBuilder';
import TokenTimeExchangeOptionsForm from '@/components/spaces/TokenTimeExchangeOptionsForm/TokenTimeExchangeOptionsForm';

import { useState } from "react";
import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";

import { blobToBase64 } from "@/utils/blobTobase64";

export default function FaceSwapSpace() {
  const { isConnected, address, disconnect, connectWallet, balance } = useWallet()
  const { hasCredits } = useCredits({ isConnected, address })
  const [loaded, setLoaded] = useState(false);

  const [src, setSrc] = useState("");

  const [source, setSource] = useState(null);
  const [dest, setDest] = useState(null);


  function swapFace() {
    setSrc("");
    setLoaded(true);
    let formData = new FormData();
    formData.append("walletAddress", address);
    formData.append("source", source, source.name);
    formData.append("dest", dest, dest.name);
    formData.append("wallet_address", address);
    axios({
      method: "POST",
      url: "https://opai.renderverse.io/faceswap-gen",
      data: formData,
      responseType: "blob",
    })
      .then((res) => {
        blobToBase64(res.data).then((c) => {
          setSrc(c);
        });
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Box>
      {isConnected && (
        <Box mt={12}>
          <Grid
            rowGap="1rem"
            columnGap={"2rem"}
            mx="auto"
            gridTemplateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
          >
            <GridItem display="grid" rowGap={"2rem"}>
              <GridItem
                pos="relative"
                minH="240px"
                borderRadius="md"
                alignItems="center"
                justifyContent={"center"}
                display={"flex"}
                w="100%"
              >
                <Box
                  px={2}
                  py={1}
                  pos="absolute"
                  border="2px"
                  top={0}
                  borderRadius={"md"}
                  borderBottomRadius="none"
                  borderRightRadius="none"
                  left={0}
                >
                  <Text
                    fontSize={{ base: "xs" }}
                  >
                    Image Source
                  </Text>
                </Box>
                <Flex zIndex={8}>
                  {source ? (
                    <Image
                      width="100%"
                      objectFit={"contain"}
                      src={URL.createObjectURL(source)}
                    />
                  ) : (
                    <Input
                      variant="flushed"
                      type={"file"}
                      onChange={(e) => setSource(e.target.files[0])}
                    />
                  )}
                </Flex>
              </GridItem>
              <GridItem
                pos="relative"
                minH="240px"
                borderRadius="md"
                alignItems="center"
                justifyContent={"center"}
                display={"flex"}
                w="100%"
              >
                <Box
                  px={2}
                  py={1}
                  pos="absolute"
                  border="2px"
                  top={0}
                  left={0}
                  borderRadius={"md"}
                  borderBottomRadius="none"
                  borderRightRadius="none"
                >
                  <Text
                    fontSize={{ base: "xs" }}
                  >
                    Image Destination
                  </Text>
                </Box>
                <Flex zIndex={8}>
                  {dest ? (
                    <Image
                      width="100%"
                      objectFit={"contain"}
                      src={URL.createObjectURL(dest)}
                    />
                  ) : (
                    <Input
                      variant="flushed"
                      type={"file"}
                      onChange={(e) => {
                        setDest(e.target.files[0]);
                      }}
                    />
                  )}
                </Flex>
              </GridItem>

            </GridItem>

            <GridItem
              pos="relative"
              minH="240px"
              borderRadius="md"
            >
              <Box
                px={2}
                py={1}
                pos="absolute"
                borderRadius={"md"}
                borderBottomRadius="none"
                borderRightRadius="none"
                border="2px"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs" }}
                >
                  Image Output
                </Text>
              </Box>
              <Flex
                pos={"absolute"}
                zIndex={8}
                alignItems={"center"}
                height="100%"
                width="100%"
                justifyContent={"center"}
              >
                {loaded ? (
                  <Box>lottie</Box>
                ) : null}
              </Flex>
              <Flex h="100%" justifyContent={"center"} alignItems="center">
                <Image
                  width="100%"
                  maxW="200px"
                  objectFit={"contain"}
                  src={src}
                />
              </Flex>
            </GridItem>
          </Grid>

          <CreditsCheckerComponent onClick={swapFace} onClickText={`Swap`} hasCredits={hasCredits} />
        </Box>
      )}

      {!isConnected && (
        <Flex mt={12} justifyContent={"center"}>
          <Button
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        </Flex>
      )}
    </Box>
  );
}
