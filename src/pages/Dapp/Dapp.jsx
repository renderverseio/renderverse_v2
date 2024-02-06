import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import { Box, Divider, Flex, Heading, Icon, Image, } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Logo from "@/assets/logo.svg";

import { CiBank, CiServer, CiStar, CiGrid41, CiDollar, CiLink } from "react-icons/ci";
import WalletMenuDropDown from "@/components/dropdowns/WalletMenuDropDown/WalletMenuDropDown";



export default function Dapp() {
  return (
    <Box>
      <DesktopSideBar />
    </Box>
  )
}

const headers = [
  {
    title: "Dashboard (soon)",
    link: "dashboard",
    icon: CiGrid41
  },
  {
    title: "Infernece APIs (Soon)",
    link: "api",
    icon: CiServer
  },
  {
    title: "Products",
    link: "products",
    icon: CiStar
  },
  {
    title: "Staking",
    link: "staking",
    icon: CiBank
  },
  {
    title: "Affiliate program",
    link: "affiliate",
    icon: CiDollar
  },
  {
    title: "Docs",
    link: "docs",
    icon: CiLink
  }
]

function DesktopSideBar() {

  const navigate = useNavigate()
  const path = useLocation()
  const pathClass = path.pathname.replace("/dapp/", "")
  return <Flex

    bg="gray.200"
    backgroundImage={`radial-gradient(circle, #ffffff, #fcfcff, #f8faff, #f3f7ff, #eef5ff);`}
    minH="100vh"
  >
    <Box
      w="24%"
      display={"flex"}
      alignItems={"center"}
      px={4}
      py={8}
      boxShadow={"lg"}
      flexDir={"column"}
      rowGap={"2rem"}
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
        borderRadius={"xl"}
        boxShadow={"lg"}
        p={4}
        flexDir={"column"}
        rowGap={"1rem"}
        bg="gray.100"
      >
        {headers.map((d, i) =>
          <Box onClick={() => navigate(d.link)} key={i}>
            <CCard
              props={{
                p: 2,
                display: "flex",
                columnGap: "1rem",
                alignItem: "center",
                bg: pathClass === d.link ? "white" : "transparent",
                borderColor: "gray.400",
                _hover: {

                }
              }}
              type="d"
            >
              <Icon h={6} w={6} as={d.icon}></Icon>
              <CText size={3} cprops={{ fontWeight: "bold", fontSize: { base: "sm" } }} title={d.title} />
            </CCard>
          </Box>
        )}
      </Flex>
    </Box>


    <Box w="100%">
      <Flex
        py={4}
        px={8}
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems="center"
        columnGap={"1rem"}
      >

        <Flex
          columnGap={".5rem"}
          alignItems={"center"}
          justifyContent="flex-start"
          cursor={"pointer"}
          onClick={() => window.location.href = "https://renderverse.io"}
        >
          <Heading color={`gray.900`}>Some Text</Heading>{" "}
        </Flex>
        <WalletMenuDropDown />
      </Flex>
      <Divider />
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
