import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import axios from "axios";

import BG from "/public/bg/16.jpg";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/i.json";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import SpaceNavbar from "../../components/spaces/SpaceNavbar";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";

export default function FaceSwapSpace() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  const [loaded, setLoaded] = useState(false);

  const [src, setSrc] = useState("");

  const [source, setSource] = useState(null);
  const [dest, setDest] = useState(null);

  const [credits, setCredits] = useState();
  const [hasCredits, setHasCredits] = useState();

  useEffect(() => {
    axios
      .post("https://opai.renderverse.io/credits", {
        wallet_address: address,
      })
      .then((res) => {
        let c = res.data.credits;
        setCredits(c);
        if (c > 0) setHasCredits(true);
        else setHasCredits(false);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

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

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      console.log(_);
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  return (
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
    >
      <SpaceNavbar
        credits={credits}
        disconnect={() => disconnect()}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      />

      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        p={{ base: 2, lg: 12 }}
        mt={12}
      >
        <Box
          display={"grid"}
          p={8}
          bg={`rgba(0,0,0,.5)`}
          boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
          borderRadius="md"
        >
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            Face Swap
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            The algorithm then replaces the facial features of one individual
            with those of another. This process involves overlaying the features
            of one face onto the image of another while maintaining the original
            images lighting, color, and texture. prompt to be generated based
            on.
          </Text>
        </Box>

        {isConnected ? (
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
                  bg={`rgba(0,0,0,.5)`}
                  boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                  borderRadius="md"
                  alignItems="center"
                  justifyContent={"center"}
                  display={"flex"}
                  w="100%"
                >
                  <Box
                    bg={colors.bgColor}
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
                      fontFamily={fonts.parafont}
                      fontWeight="bold"
                      color={colors.fontLightColorV2}
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
                        color={colors.fontLightColor}
                        fontFamily={fonts.specialFont}
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
                  bg={`rgba(0,0,0,.5)`}
                  boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                  borderRadius="md"
                  alignItems="center"
                  justifyContent={"center"}
                  display={"flex"}
                  w="100%"
                >
                  <Box
                    bg={colors.bgColor}
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
                      fontFamily={fonts.parafont}
                      fontWeight="bold"
                      color={colors.fontLightColorV2}
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
                        color={colors.fontLightColor}
                        fontFamily={fonts.specialFont}
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
                bg={`rgba(0,0,0,.5)`}
                boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
                borderRadius="md"
              >
                <Box
                  bg={colors.bgColor}
                  px={2}
                  py={1}
                  pos="absolute"
                  borderRadius={"md"}
                  borderBottomRadius="none"
                  borderRightRadius="none"
                  border="2px"
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
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
                    <Lottie animationData={groovyWalkAnimation} />
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
            <Box my={4} mx="auto" w="80%" py={4}>
              <Flex justifyContent={"center"} alignItems="center">
                {hasCredits ? (
                  <ConnectWalletButton
                    onClick={() => swapFace()}
                    title={`Generate`}
                  />
                ) : (
                  <Box>
                    <Text
                      color={colors.boxBorder}
                      fontWeight="bold"
                      size={{ base: "sm", lg: "lg" }}
                      fontFamily={fonts.parafont}
                    >
                      Oops credits has expired, please contact team
                    </Text>
                  </Box>
                )}
              </Flex>
            </Box>
          </Box>
        ) : (
          <Flex mt={12} justifyContent={"center"}>
            <ConnectWalletButton
              onClick={connectWallet}
              title="Connect Wallet"
            />
          </Flex>
        )}
      </Box>
    </Box>
  );
}
