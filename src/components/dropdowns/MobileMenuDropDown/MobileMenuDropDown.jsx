import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import { desktopMenuItems } from "@/data/home/navbarData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";

import Logo from "@/assets/logos/logo.png";

import {
  Icon,
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";

import { MdOutlineMenuOpen } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

export default function MobileMenuDropDown() {
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
        placement="right"
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
              <Box
                onClick={() => navigate("/dapp")}
                fontWeight={"bold"}
                p={3}
                borderRadius="lg"
                className="btn btn-1"
                boxShadow={"lg"}
              >
                Launch Dapp
              </Box>
              {desktopMenuItems.map((d, i) => (
                <Box
                  onClick={() => {
                    // navigate(d.menu);
                    // onClose();
                  }}
                  key={i}
                >
                  {/* <Icon h={6} w={6} as={d.icon}></Icon> */}

                  {i === 0 && (
                    <Link href="https://t.me/renderversechat" target={"_blank"}>
                      <Box
                        fontWeight={"bold"}
                        p={3}
                        borderRadius="lg"
                        className="btn btn-2"
                        boxShadow={"lg"}
                      >
                        {d.menu}
                      </Box>
                    </Link>
                  )}

                  {i !== 0 && (
                    <Accordion allowToggle={true}>
                      <AccordionItem
                        border="none"
                        boxShadow={"lg"}
                        borderRadius="lg"
                      >
                        <AccordionButton
                          alignItems={"center"}
                          display={"flex"}
                          justifyContent="space-between"
                          borderTopRadius={"lg"}
                          border={"none"}
                          bg="gray.50"
                          bgImg={
                            pathClass !== d.link
                              ? "transpernt"
                              : "linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);"
                          }
                        >
                          <CText
                            size={1}
                            cprops={{
                              fontWeight: "bold",
                              fontSize: { base: "sm" },
                            }}
                            title={d.menu}
                          />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          {d.options.map((s, n) => (
                            <Box mt={2} key={n}>
                              <CText
                                size={1}
                                cprops={{
                                  fontWeight: "bold",
                                  fontSize: { base: "sm" },
                                }}
                                title={s.title}
                              />
                            </Box>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  )}
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
