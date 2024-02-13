import Logo from "@/assets/logos/logo.png";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import { MdOutlineMenuOpen } from "react-icons/md";

import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";

import { dAppHeaders } from "@/data/dapp/dappData";
import { useRef } from "react";

export default function Dapp() {
  return (
    <Box>
      <Grid
        minH="100vh"
        templateColumns={{
          base: "1fr",
          lg: "2fr 7fr",
          xl: "2fr 8fr",
          "2xl": "1.6fr 7fr",
        }}
        bg="gray.200"
      >
        <Box display={{ base: "none", lg: "block" }}>
          <DesktopSideBar />
        </Box>

        <Box maxH="100vh" overflowY={"scroll"} w="100%">
          <Flex
            p={4}
            pr={8}
            justifyContent={{ base: "space-between", lg: "flex-end" }}
            alignItems={{ base: "center", lg: "flex-end" }}
          >
            <MobileDrawer />
            <WalletMenuDropDown />
          </Flex>
          <Outlet />
        </Box>
      </Grid>
    </Box>
  );
}

function DesktopSideBar() {
  const navigate = useNavigate();
  const path = useLocation();
  const pathClass = path.pathname.replace("/dapp/", "");
  return (
    <Box
      px={4}
      h={"100vh"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      py={8}
      border="2px"
      borderLeft={"none"}
      borderTop="none"
      borderBottom={"none"}
      borderColor="white"
      bg="gray.50"
      // bgImg={`linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);`}
      // bgImg={`linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);`}
    >
      <Flex
        columnGap={".5rem"}
        alignItems={"center"}
        justifyContent="flex-start"
        cursor={"pointer"}
        onClick={() => navigate("/")}
      >
        <Image src={Logo} />
      </Flex>
      <Box h="1px" my={6} w="100%" bg="gray.100"></Box>
      <Flex flexDir={"column"} rowGap={"1rem"} w="100%" borderRadius={"lg"}>
        {dAppHeaders.map((d, i) => (
          <Box onClick={() => navigate(d.link)} key={i}>
            <CCard
              props={{
                p: 2,
                display: "flex",
                columnGap: "1rem",
                alignItems: "center",
                boxShadow: "none",
                bg: "gray.50",
                bgImg:
                  pathClass !== d.link
                    ? "transpernt"
                    : "linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);",
                _hover: {},
              }}
              type="d"
            >
              <Icon h={6} w={6} as={d.icon}></Icon>
              {dAppHeaders.length - 1 === i ? (
                <Link
                  href={`https://whitepaper.renderverse.io`}
                  target={"_blank"}
                >
                  <CText
                    size={1}
                    cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }}
                    title={d.title}
                  />
                </Link>
              ) : (
                <CText
                  size={1}
                  cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }}
                  title={d.title}
                />
              )}
            </CCard>
          </Box>
        ))}
      </Flex>

      <Box h="1px" my={6} w="100%" bg="gray.100"></Box>
    </Box>
  );
}

function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navigate = useNavigate();
  const path = useLocation();
  const pathClass = path.pathname.replace("/dapp/", "");

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Box>
        <Icon
          h={12}
          w={12}
          as={MdOutlineMenuOpen}
          ref={btnRef}
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex
              columnGap={".5rem"}
              alignItems={"center"}
              justifyContent="center"
              cursor={"pointer"}
              onClick={() => (window.location.href = "https://renderverse.io")}
            >
              <Image maxW={"80%"} src={Logo} />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              mt={12}
              flexDir={"column"}
              rowGap={"1rem"}
              w="100%"
              borderRadius={"lg"}
            >
              {dAppHeaders.map((d, i) => (
                <Box
                  onClick={() => {
                    navigate(d.link);
                    onClose();
                  }}
                  key={i}
                >
                  <CCard
                    props={{
                      p: 2,
                      display: "flex",
                      columnGap: "1rem",
                      alignItems: "center",
                      boxShadow: "none",
                      bg: "gray.50",
                      bgImg:
                        pathClass !== d.link
                          ? "transpernt"
                          : "linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);",
                      _hover: {},
                    }}
                    type="d"
                  >
                    <Icon h={6} w={6} as={d.icon}></Icon>
                    <CText
                      size={1}
                      cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }}
                      title={d.title}
                    />
                  </CCard>
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
