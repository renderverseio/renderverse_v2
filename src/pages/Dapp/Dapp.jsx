import Navbar from "@/components/common/Navbar/Navbar";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import { Box, Flex, } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router";

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
    title: "Conversations",
    link: "conversations"
  },
  {
    title: "Dashboard",
    link: "dashboard"
  },
  {
    title: "My Aigents",
    link: "myaigents"
  },
  {
    title: "Product Suite",
    link: "products"
  },
  {
    title: "Staking",
    link: "staking"
  },
  {
    title: "Affiliate Program",
    link: "affiliate"
  },
  {
    title: "Docs",
    link: "docs"
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
        w="14%"
        mt={6}
        p={4}
      >
        {headers.map((d, i) =>
          <Box my={2} onClick={() => navigate(d.link)} key={i}>
            <CCard
              props={{
                p: 4,
                background: pathClass === d.link ? "white" : "transparent",
                _hover: {
                }

              }}
              type="d">
              <CText size={3} cprops={{ fontWeight: "bold" }} title={d.title} />
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
