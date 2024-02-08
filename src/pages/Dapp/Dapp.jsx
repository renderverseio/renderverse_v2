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
    minH="100vh"
    className="bg"
  >
    <Box
      p={4}
      m={8}
      w="24%"
      h={"100vh"}
      display={"flex"}
      rowGap={"2rem"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      className="glass_effect"
      borderRadius={"lg"}
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
      <WalletMenuDropDown />
    </Box>


    <Box w="100%">
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
