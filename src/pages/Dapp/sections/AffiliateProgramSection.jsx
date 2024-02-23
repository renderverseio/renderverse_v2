import Logo from "@/assets/logos/icon.png";
import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { MdAccountBalance, MdPeople } from "react-icons/md";

import ComingSoon from "@/components/dapp/ComingSoon/ComingSoon";

const data = [
  {
    title: "Referral Reward",
    subText: "0 RDAI$",
    icon: MdPeople,
  },
  {
    title: "Current Balance",
    subText: "0 RDAI$",
    icon: MdAccountBalance,
  },
];

export default function AffiliateProgramSection() {
  return (
    <Box pos="relative" p={8}>
      <Flex
        pos={"absolute"}
        justifyContent="center"
        alignItems={"center"}
        minH="70vh"
        minW="100%"
        zIndex={8}
      >
        <ComingSoon />
      </Flex>
      <CCard
        props={{
          p: 8,
          border: "2px",
          boxShadow: "sm",
          borderColor: "white",
          borderRadius: "lg",
          display: "grid",
          rowGap: "2rem",
          filter: "blur(5px)",
        }}
      >
        <Grid
          rowGap={"2rem"}
          columnGap={"2rem"}
          templateColumns={{ lg: "1fr 1fr" }}
        >
          <Grid
            p={4}
            borderRadius="lg"
            border="2px"
            borderColor="white"
            boxShadow="sm"
            rowGap={"1rem"}
            alignItems="center"
          >
            <Flex justifyContent={"center"} alignItems="center">
              <Image maxW="32" src={Logo} />
            </Flex>
            <Flex columnGap={"1rem"} justifyContent={"center"}>
              <Box borderRadius={"lg"} p={3} className="btn btn-1">
                Edit Profile
              </Box>
              <Box borderRadius={"lg"} p={3} className="btn btn-2">
                View Profile
              </Box>
            </Flex>
          </Grid>
          <Grid
            rowGap={"1rem"}
            columnGap="1rem"
            templateColumns={{ md: "1fr 1fr" }}
            alignItems="center"
          >
            {data.map((d, i) => (
              <Grid
                textAlign={"center"}
                alignItems={"center"}
                justifyContent="center"
                key={i}
                p={4}
                borderRadius="lg"
                bg="gray.50"
                border="2px"
                borderColor="white"
                boxShadow="sm"
              >
                <Flex justifyContent={"center"}>
                  <Icon color="gray.600" h={12} w={12} as={d.icon} />
                </Flex>
                <CHeading size={3} title={d.title} />
                <CText size={2} title={d.subText} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid p={4} borderRadius={"lg"} bg="gray.50">
          <CHeading size={3} title={`Referral History`} />
          <Table>
            <Thead>
              <Tr>
                {["ID", "Usage", "Reward"].map((header, i) => (
                  <Th key={i}>{header}</Th>
                ))}
              </Tr>
            </Thead>

            <Tbody borderBottomRadius={"lg"} border="2px" borderColor={"white"}>
              <Tr></Tr>
            </Tbody>
            <TableCaption>No History</TableCaption>
          </Table>
        </Grid>
      </CCard>
    </Box>
  );
}
