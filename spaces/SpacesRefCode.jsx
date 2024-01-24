import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import BG from "/public/bg/16.jpg";
import G from "/public/icons/grid.png";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import WalletButton from "../components/spaces/WalletButton";
import ModelSpaceNavbar from "../components/common/ModelSpaceNavbar";
import ConnectWalletButton from "../components/common/ConnectWalletButton";

import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";
import { useNavigate, useParams } from "react-router";

import { spacesData } from "../data/spacesData";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegDotCircle } from "react-icons/fa";

function SpacesRefCode() {
  const navigate = useNavigate();
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

  const params = useParams();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const code = params.refCode;
    axios({
      method: "POST",
      url: "https://opai.renderverse.io/check-ref",
      data: { refCode: code },
    })
      .then((res) => {
        console.log(res);
        setAccess(res.data.hasAccess);
      })
      .catch((err) => {
        setAccess(false);
        console.log(err);
      });
  }, [params]);

  return (
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      pos="relative"
      // className="bg_img"
      minH="100vh"
    >
      <ModelSpaceNavbar />
      <Flex mr={{ base: 0, lg: 6 }} mt={8} justifyContent="flex-end">
        {isConnected ? (
          <WalletButton
            disconnect={() => disconnect()}
            balance={balanceFeteched ? balance.formatted : ""}
            address={address ? address : ""}
            isConnected={isConnected}
          />
        ) : (
          <ConnectWalletButton onClick={connectWallet} title="Connect Wallet" />
        )}
      </Flex>

      {access ? (
        <Box
          mt={{ base: 8, lg: 12 }}
          mx="auto"
          width={{ base: "100%", lg: "88%" }}
          pos="relative"
        >
          <Box
            alignItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
            rowGap={{ base: "2rem" }}
            py={{ base: 8, lg: 0 }}
          >
            <Box>
              <Box
                justifyContent={"flex-start"}
                alignItems="center"
                display={"flex"}
              >
                <Image maxW={16} maxH={16} src={G} />
                <Box
                  display={"flex"}
                  flexDir="column"
                  justifyContent={"flex-start"}
                  px={2}
                >
                  <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    fontFamily={fonts.headingFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "5xl" }}
                  >
                    Spaces
                  </Text>
                </Box>
              </Box>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                color={colors.fontLightColor}
                fontSize={{ base: "2xl" }}
                pb={4}
                pl={4}
              >
                Discover our wide range AI DAPPss
              </Text>
            </Box>
            <Box
              flexDir={{ base: "column", lg: "row" }}
              alignItems={"center"}
              display={"flex"}
              columnGap="1rem"
              rowGap={"1rem"}
            ></Box>
          </Box>
          <Box
            mb={12}
            h={4}
            width="100%"
            borderRadius={"xl"}
            border={`1px solid ${colors.bgColor}`}
            opacity={0.8}
            className="bg_img"
            boxShadow={`0px 0px 4px ${colors.fontLightColor}`}
          ></Box>
          <Grid
            pb={12}
            rowGap="1rem"
            columnGap={"1rem"}
            gridTemplateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr",
            }}
          >
            {spacesData.map((d, i) => (
              <GridItem
                opacity={0.95}
                cursor={"pointer"}
                borderRadius={"lg"}
                pos={"relative"}
                key={i}
                w="100%"
                className="bg_img"
                onClick={() =>
                  navigate(
                    "/dapp/spaces/" + d.link + "/refCode/" + params.refCode
                  )
                }
              >
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  flexDir="column"
                  borderRadius={"xl"}
                  pos="relative"
                  transition={"all 200ms"}
                  boxShadow={`0px 0px 4px ${colors.fontLightColor}`}
                  w="100%"
                >
                  <Flex
                    boxShadow={`0px 0px 3px ${colors.highLightColor}`}
                    justifyContent={"space-between"}
                    columnGap="1rem"
                    mx="auto"
                    width="100%"
                    borderRadius={"xl"}
                    borderBottomRadius={0}
                    flexDir="row"
                    display={"flex"}
                    p={4}
                    px={8}
                    alignItems="center"
                  >
                    <Text
                      fontWeight={"bold"}
                      fontFamily={fonts.specialFont}
                      textTransform="uppercase"
                      color={colors.fontLightColor}
                      fontSize={{ base: "2xl" }}
                      textAlign="center"
                    >
                      {d.display_name}
                    </Text>{" "}
                    <Image src={d.avatar} maxW={"16"} maxH={"16"} />
                  </Flex>
                  <Box
                    columnGap="1rem"
                    boxShadow={`0px 0px 7px ${colors.boxEndColor}`}
                    px={8}
                    minH="240px"
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    bg={colors.bgColor}
                  >
                    <Text
                      fontWeight={"bold"}
                      fontFamily={fonts.secondary}
                      color={colors.fontLightColorV2}
                      textAlign="left"
                    >
                      {d.desc}
                    </Text>
                  </Box>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems="center"
                    px={2}
                    py={1}
                    columnGap=".5rem"
                    borderRadius="md"
                    borderTopRadius={0}
                    p={4}
                  >
                    <Box
                      display={"flex"}
                      alignItems="center"
                      columnGap={".66rem"}
                    >
                      <FaRegDotCircle color="green" size={15} />
                      <Button
                        variant={"unstyled"}
                        color="green.300"
                        fontWeight="bold"
                        fontFamily={fonts.specialFont}
                        size="xl"
                      >
                        LIVE
                      </Button>
                    </Box>

                    <Box transform={"scale(0.75)"}>
                      <ConnectWalletButton
                        onClick={() =>
                          navigate(
                            "/dapp/spaces/" +
                              d.link +
                              "/refCode/" +
                              params.refCode
                          )
                        }
                        title="
                    Try Now
"
                      />
                    </Box>
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      ) : (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Text
            fontSize={{ base: "xl", lg: "2xl" }}
            fontWeight="bold"
            fontFamily={fonts.headingFont}
            color={colors.highLightColor}
          >
            Oops you dont have access, contact Team
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default SpacesRefCode;
