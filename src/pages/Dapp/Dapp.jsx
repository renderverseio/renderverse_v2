import Logo from "@/assets/logo.png";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

import { Outlet, useLocation, useNavigate } from "react-router";
import { Box, Flex, Grid, Icon, Image, } from "@chakra-ui/react";


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
  return <Grid
    minH="100vh"
    templateColumns={{ base: 0, lg: "2fr 7fr", xl: "2fr 8fr", '2xl': "1.6fr 7fr" }}
    bg="gray.200"
  >

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
    >
      <Flex
        columnGap={".5rem"}
        alignItems={"center"}
        justifyContent="flex-start"
        cursor={"pointer"}
        onClick={() => window.location.href = "https://renderverse.io"}
      >
        <Image src={Logo} />
      </Flex>
      <Box h="1px" my={6} w="100%" bg="gray.100"></Box>
      <Flex
        flexDir={"column"}
        rowGap={"1rem"}
        w="100%"
        borderRadius={"lg"}
      >
        {dAppHeaders.map((d, i) =>
          <Box onClick={() => navigate(d.link)} key={i}>
            <CCard
              props={{
                p: 2,
                display: "flex",
                columnGap: "1rem",
                alignItems: "center",
                boxShadow: "none",
                bg: "gray.50",
                bgImg: pathClass !== d.link ? "transpernt" : "linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);",
                _hover: {
                }
              }}
              type="d"
            >
              <Icon h={6} w={6} as={d.icon}></Icon>
              <CText size={1} cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }} title={d.title} />
            </CCard>
          </Box>
        )}
      </Flex>

      <Box h="1px" my={6} w="100%" bg="gray.100"></Box>

    </Box>


    <Box w="100%">
      <Flex p={4} justifyContent={"flex-end"} alignItems={"flex-end"}>
        <WalletMenuDropDown />
      </Flex>
      <Outlet />
    </Box>
  </Grid >
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
