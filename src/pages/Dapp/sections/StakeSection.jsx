import Navbar from "@/components/common/Navbar/Navbar";
import CCard from "@/components/custom/CCard/CCard";
import ComingSoon from "@/components/dapp/ComingSoon/ComingSoon";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Icon,
  Container,
} from "@chakra-ui/react";

import { Box, Flex, Grid, Tag } from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";

export default function StakeSection() {
  return (
    <Box>
      <Navbar />
      <Flex
        pos={"absolute"}
        justifyContent="center"
        alignItems={"center"}
        minH="70vh"
        minW="100%"
        zIndex={8}
      >
        <ComingSoon />
      </Flex>

      <Container filter={"blur(4px)"}>
        <Flex alignItems={"center"} rowGap={"2rem"} p={2} flexDir={"column"}>
          <CHeading size={1} title={"Staking"} />
          <Box>
            <Tabs variant="soft-rounded" colorScheme="green">
              <Flex justifyContent={"center"} alignItems="center">
                <Flex p={1} borderRadius="3xl" boxShadow={"lg"}>
                  <TabList>
                    <Tab mr={1} boxShadow={"lg"}>
                      <CText
                        size={2}
                        cprops={{ fontWeight: "bold" }}
                        title={`Flexible`}
                      />
                    </Tab>
                    <Tab boxShadow={"lg"}>
                      <CText
                        cprops={{ fontWeight: "bold" }}
                        size={2}
                        title={`Locked`}
                      />
                    </Tab>
                  </TabList>
                </Flex>
              </Flex>
              <TabPanels>
                <TabPanel>
                  <Grid w="100%">
                    <Flex my={4} justifyContent={"center"}>
                      <CText size={2} title={`FLEXIBLE STAKING`} />
                    </Flex>
                    <Flex
                      mx="auto"
                      w={{
                        base: "100%",
                        md: "80%",
                        lg: "60%",
                        xl: "550px",
                      }}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <CCard
                        props={{
                          display: "grid",
                          rowGap: "1rem",
                          borderBottomRadius: "lg",
                          w: "100%",
                          bgImg: data[0].bgImg,
                          boxShadow: "lg",
                          border: "1px",
                          borderColor: "gray",
                        }}
                        type="s"
                      >
                        <Flex
                          justifyContent={"center"}
                          borderTopRadius={"lg"}
                          borderBottom="1px"
                          borderColor={"gray"}
                          p={3}
                        >
                          <CText
                            cprops={{ color: "white", fontWeight: "bold" }}
                            size={2}
                            title={`STAKE`}
                          />{" "}
                        </Flex>
                        <Box display={"grid"} rowGap="2rem" p={3}>
                          <Box>
                            <Flex justifyContent={"space-between"}>
                              <CText
                                cprops={{ color: "white", fontWeight: "500" }}
                                size={3}
                                title={`Amount`}
                              />{" "}
                              <CText
                                cprops={{ color: "white", fontWeight: "500" }}
                                size={3}
                                title={`~Staked RDAI: 0.000`}
                              />{" "}
                            </Flex>
                            <Flex>
                              <InputGroup>
                                <InputLeftAddon
                                  boxShadow={"md"}
                                  fontWeight="500"
                                  cursor={"pointer"}
                                  bgImg={data[0].bgImg}
                                  color="white"
                                >
                                  $RDAI
                                </InputLeftAddon>
                                <Input
                                  border={"1px"}
                                  color="white"
                                  boxShadow={"md"}
                                  placeholder="0"
                                  fontWeight="bold"
                                  borderColor="white"
                                />
                                <InputRightAddon
                                  boxShadow={"md"}
                                  fontWeight="500"
                                  cursor={"pointer"}
                                  bgImg={data[0].bgImg}
                                  color="white"
                                >
                                  MAX
                                </InputRightAddon>
                              </InputGroup>
                            </Flex>
                          </Box>
                          <Flex justifyContent={"center"}>
                            <Box
                              fontWeight="bold"
                              boxShadow={"lg"}
                              borderRadius="lg"
                              bgImage={data[1].btnImg}
                              p={3}
                            >
                              Stake $RDAI
                            </Box>
                          </Flex>
                        </Box>
                      </CCard>
                    </Flex>

                    <Flex
                      mx="auto"
                      mt={12}
                      w={{
                        base: "100%",
                        md: "80%",
                        lg: "60%",
                        xl: "550px",
                      }}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <CCard
                        props={{
                          display: "grid",
                          borderBottomRadius: "lg",
                          w: "100%",
                          bgImg: data[1].bgImg,
                          boxShadow: "lg",
                          border: "1px",
                          borderColor: "gray",
                        }}
                        type="s"
                      >
                        <Flex
                          justifyContent={"center"}
                          borderTopRadius={"lg"}
                          borderBottom="1px"
                          borderColor={"gray"}
                          p={3}
                        >
                          <CText
                            cprops={{ fontWeight: "bold", color: "white" }}
                            size={2}
                            title={`MY REWARDS `}
                          />{" "}
                        </Flex>
                        <Box display={"grid"} rowGap="2rem" p={3}>
                          <Box>
                            <Flex
                              alignItems={"center"}
                              textAlign="center"
                              px={4}
                              justifyContent={"space-between"}
                            >
                              <Box>
                                <CText
                                  cprops={{ color: "white", fontWeight: "500" }}
                                  size={3}
                                  title={`Total Staked Amount`}
                                />{" "}
                                <CHeading
                                  cprops={{ color: "white" }}
                                  size={3}
                                  title={`0 RDAI`}
                                />{" "}
                              </Box>
                              <Box>
                                <CText
                                  cprops={{ color: "white", fontWeight: "500" }}
                                  size={3}
                                  title={`Total Rewards`}
                                />{" "}
                                <CHeading
                                  cprops={{ color: "white" }}
                                  size={3}
                                  title={`0.000 RDAI`}
                                />{" "}
                              </Box>
                            </Flex>
                          </Box>
                          <Flex justifyContent={"center"}>
                            <Box
                              boxShadow={"lg"}
                              borderRadius="lg"
                              className="btn btn-2"
                              fontWeight={"bold"}
                              p={3}
                            >
                              WITHDRAW REWARDS
                            </Box>
                          </Flex>
                        </Box>
                      </CCard>
                    </Flex>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid w="100%">
                    <Flex my={4} justifyContent={"center"}>
                      <CText size={2} title={`LOCKED STAKING APY : 15%`} />
                    </Flex>
                    <Flex
                      mx="auto"
                      w={{
                        base: "100%",
                        md: "80%",
                        lg: "60%",
                        xl: "550px",
                      }}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <CCard
                        props={{
                          display: "grid",
                          rowGap: "1rem",
                          borderBottomRadius: "lg",
                          w: "100%",
                          bgImg: data[0].bgImg,
                          boxShadow: "lg",
                          border: "1px",
                          borderColor: "gray",
                        }}
                        type="s"
                      >
                        <Flex
                          justifyContent={"center"}
                          borderTopRadius={"lg"}
                          borderBottom="1px"
                          borderColor={"gray"}
                          p={3}
                        >
                          <CText
                            cprops={{ fontWeight: "bold", color: "white" }}
                            size={2}
                            title={`STAKE RDAI`}
                          />{" "}
                        </Flex>
                        <Box display={"grid"} rowGap="2rem" p={3}>
                          <Box>
                            <Flex justifyContent={"space-between"}>
                              <CText
                                cprops={{ fontWeight: "500", color: "white" }}
                                size={3}
                                title={`Amount`}
                              />{" "}
                              <CText
                                cprops={{ fontWeight: "500", color: "white" }}
                                size={3}
                                title={`~My balance: 0.000 RDAI`}
                              />{" "}
                            </Flex>
                            <Flex>
                              <InputGroup>
                                <InputLeftAddon
                                  boxShadow={"md"}
                                  fontWeight="500"
                                  cursor={"pointer"}
                                  bgImg={data[0].bgImg}
                                  color="white"
                                >
                                  $RDAI
                                </InputLeftAddon>
                                <Input
                                  color="white"
                                  fontWeight="bold"
                                  border={"1px"}
                                  boxShadow={"md"}
                                  placeholder="0"
                                />
                                <InputRightAddon
                                  color="white"
                                  boxShadow={"md"}
                                  fontWeight="500"
                                  cursor={"pointer"}
                                  bgImg={data[0].bgImg}
                                >
                                  MAX
                                </InputRightAddon>
                              </InputGroup>
                            </Flex>
                          </Box>
                          <Flex justifyContent={"center"}>
                            <Box
                              boxShadow={"lg"}
                              borderRadius="lg"
                              className="btn btn-1"
                              p={3}
                              fontWeight="bold"
                            >
                              ENABLE STAKING
                            </Box>
                          </Flex>
                        </Box>
                      </CCard>
                    </Flex>

                    <Flex
                      mx="auto"
                      mt={12}
                      w={{
                        base: "100%",
                        md: "80%",
                        lg: "60%",
                        xl: "550px",
                      }}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <CCard
                        props={{
                          display: "grid",
                          borderBottomRadius: "lg",
                          w: "100%",
                          bgImg: data[1].bgImg,
                          boxShadow: "lg",
                          border: "1px",
                          borderColor: "gray",
                        }}
                        type="s"
                      >
                        <Flex
                          justifyContent={"center"}
                          borderTopRadius={"lg"}
                          borderBottom="1px"
                          borderColor={"gray"}
                          p={3}
                        >
                          <CText
                            cprops={{ fontWeight: "bold", color: "white" }}
                            size={2}
                            title={`MY RDAI REWARDS `}
                          />{" "}
                        </Flex>
                        <Flex justifyContent={"center"}>
                          <CText
                            cprops={{
                              color: "white",
                              fontWeight: "bold",
                              my: 2,
                            }}
                            size={3}
                            title={`No transactions`}
                          />{" "}
                        </Flex>
                      </CCard>
                    </Flex>
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

const data = [
  {
    bgImg: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% );`,
    btnImg:
      "linear-gradient(to right, #95bdff, #68ceff, #20deff, #00edfe, #1ff8e5)",
    days: "30 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
  },
  {
    days: "60 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
    btnImg:
      "linear-gradient(to right bottom, #ff653f, #ff763c, #ff863b, #ff953c, #ffa440);",
    bgImg: `linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )`,
  },
  {
    days: "90 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
    bgImg: `linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );`,
    btnImg:
      "linear-gradient(to right bottom, #1779ff, #008aff, #009aff, #00a9ff, #16b6fe);",
  },
];
