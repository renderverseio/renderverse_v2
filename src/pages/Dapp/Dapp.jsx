import Logo from "@/assets/logo.svg";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import { Outlet, useLocation, useNavigate } from "react-router";
import { Box, Flex, Heading, Icon, Image, } from "@chakra-ui/react";


import { CiBag1 } from "react-icons/ci";
import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";
import { dAppHeaders } from "@/data/dapp/dappData";


export default function Dapp() {
  return (
    <Box>
      <DesktopSideBar />
    </Box>
  )
}


function DesktopSideBar() {

  const navigate = useNavigate()
  const path = useLocation()
  const pathClass = path.pathname.replace("/dapp/", "")
  return <Flex
    backgroundImage={`linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);`}
    minH="100vh"
  >
    <Box
      w="24%"
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      px={4}
      py={8}
      flexDir={"column"}
      rowGap={"2rem"}
      justifyContent={"space-evenly"}
    >
      <Flex
        columnGap={".5rem"}
        alignItems={"center"}
        justifyContent="flex-start"
        cursor={"pointer"}
        onClick={() => window.location.href = "https://renderverse.io"}
      >
        <Image src={Logo} />
        <Heading fontSize={{ lg: "2xl" }} color={`gray.900`}>Renderverse</Heading>{" "}
      </Flex>
      <Flex
        flexDir={"column"}
        rowGap={"1rem"}
        p={4}
        borderRadius={"lg"}
        boxShadow={"inset 5px 5px 27px #e3e3e3, inset -5px -5px 27px #ffffff"}
        bg="white"
        backgroundImage={`linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);`}
      >
        {dAppHeaders.map((d, i) =>
          <Box onClick={() => navigate(d.link)} key={i}>
            <CCard
              props={{
                p: 2,
                display: "flex",
                columnGap: "1rem",
                alignItem: "center",
                bg: pathClass !== d.link ? "transpernt" : "white",
                _hover: {

                }
              }}
              type="d"
            >
              <Icon h={6} w={6} as={d.icon}></Icon>
              <CText size={2} cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }} title={d.title} />
            </CCard>
          </Box>
        )}
      </Flex>

      <Flex
        flexDir={"column"}
        rowGap={"1rem"}
        px={8}
        py={4}
        borderRadius={"lg"}
        bg="white"
        boxShadow={"inset 5px 5px 27px #e3e3e3, inset -5px -5px 27px #ffffff"}
        backgroundImage={`linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);`}
      >
        <Flex alignItems={"center"} columnGap={".5rem"}>
          <Icon h={8} w={8} as={CiBag1}></Icon>
          <CText size={2} cprops={{ fontWeight: "bold", }} title={`ETH Rewards`} />
        </Flex>
        <Box>
          <CText size={2} cprops={{ fontWeight: "bold", fontSize: { base: "lg" } }} title={`105.85 ETH`} />
          <CText size={2} cprops={{ fontSize: { base: "sm" } }} title={`Allocated rewards`} />
        </Box>
        <Box>
          <CText size={2} cprops={{ fontWeight: "bold", fontSize: { base: "lg" } }} title={`18 108 033 RNDR`} />
          <CText size={2} cprops={{ fontSize: { base: "sm" } }} title={`Total staked amount`} />
        </Box>
      </Flex>
    </Box>


    <Box w="100%">
      <Flex
        pt={4}
        px={8}
        display={{ base: "none", md: "flex" }}
        justifyContent={"flex-end"}
        alignItems="center"
        columnGap={"1rem"}
      >
        <WalletMenuDropDown />
      </Flex>
      <Outlet />
    </Box>
  </Flex >
}

// function DrawerExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = useRef()
//
//   return (
//     <>
//       {/* <Button ref={btnRef} colorScheme='orange' onClick={onOpen}> */}
//       {/*   Open */}
//       {/* </Button> */}
//       <Drawer
//         isOpen={isOpen}
//         placement='left'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>
//
//           <DrawerBody>
//           </DrawerBody>
//
//           <DrawerFooter>
//             <Button variant='outline' mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme='blue'>Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   )
// }
