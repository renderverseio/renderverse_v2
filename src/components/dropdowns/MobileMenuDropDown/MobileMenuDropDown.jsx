import CText from "@/components/typography/CText/CText";
import { desktopMenuItems } from "@/data/home/navbarData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Text,
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
              {desktopMenuItems.map((d, i) => (
                <Box key={i}>
                  {i + 1 !== 0 && i + 1 !== 4 && (
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
                          p={4}
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
                          {d.options.map((option, n) => (
                            <Box
                              onClick={() => {
                                onClose();
                              }}
                              mt={2}
                              p={2}
                              borderRadius="lg"
                              key={n}
                              _hover={{
                                bg: "gray.100",
                              }}
                            >
                              <Link
                                href={option.link}
                                style={{ textDecoration: "none" }}
                              >
                                <Flex
                                  alignItems={"center"}
                                  justifyContent="space-between"
                                  columnGap={"1rem"}
                                >
                                  <Image maxW={"32px"} src={option.icon} />
                                  <Box>
                                    <Text fontWeight={"bold"}>
                                      {option.title}
                                    </Text>
                                    <Text fontSize={"sm"}>
                                      {option.subText}
                                    </Text>
                                  </Box>
                                </Flex>
                              </Link>
                            </Box>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  )}
                </Box>
              ))}

              <Box
                as="a"
                href="https://t.me/renderversechat"
                target="_blank"
                fontWeight={"bold"}
                p={3}
                borderRadius="lg"
                className="btn btn-2"
                boxShadow={"lg"}
              >
                Join Our Community
              </Box>

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
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
