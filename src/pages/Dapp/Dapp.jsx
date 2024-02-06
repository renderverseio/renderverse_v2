import Navbar from "@/components/common/Navbar/Navbar";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import { Box, Flex, Icon, } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router";

import { CiBank, CiServer, CiStar, CiGrid41, CiDollar, CiLink } from "react-icons/ci";



export default function Dapp() {
  return (
    <Box>
      <Box boxShadow={"md"}>
        <Navbar />
      </Box>
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
  return <Box>
    <Flex>
      <Box
        height={"100vh"}
        w="24%"
        p={6}
        border={"2px"}
        borderTop="none"
        borderBottom={"none"}
        borderLeft={"none"}
        borderColor="gray.400"
        display={"flex"}
        flexDir={"column"}
        rowGap={"1rem"}
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
                border: "2px",
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
      </Box>

      <Box w="100%">
        <Outlet />
      </Box>
    </Flex>
  </Box>
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
