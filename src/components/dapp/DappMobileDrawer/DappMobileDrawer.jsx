import Logo from "@/assets/logos/logo.png";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import { MdOutlineMenuOpen } from "react-icons/md";

import { useLocation, useNavigate } from "react-router";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { dAppHeaders } from "@/data/dapp/dappData";
import { useRef } from "react";

export default function DappMobileDrawer() {
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
              onClick={() => navigate("/")}
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
