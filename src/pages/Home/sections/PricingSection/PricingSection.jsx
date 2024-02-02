import CHeading from "@/components/typography/CHeading/CHeading";
import { pricingData } from "@/data/home/priceData";
import { Box, Table, Tr, Grid, Flex, TableContainer, Tbody, Td } from "@chakra-ui/react";

export default function PricingSection() {
  return <Box py={32}>
    <Flex my={2} justifyContent={"center"}>
      <CHeading size={1} title={"Pricing"} />
    </Flex>

    <Table variant='simple' colorScheme='purple'>
      <Tbody>
        {pricingData.map(
          (data, index) =>
            <>
              {data.heading &&
                <CHeading cprops={{ my: 12, textDecoration: "underline" }} title={data.header} size={2} />
              }
              {!data.heading && <Tr >
                <Td >
                  <Flex justifyContent={"start"} alignItems={"center"}>
                    {data.header}
                  </Flex>
                </Td>

                <Td >
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    {data.td1}
                  </Flex>
                </Td>
                <Td >
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    {data.td2}
                  </Flex>
                </Td>
                <Td >
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    {data.td3}
                  </Flex>
                </Td>
                <Td >
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    {data.td4}
                  </Flex>
                </Td>
              </Tr>}
            </ >
        )}
      </Tbody>
    </Table>
  </Box>
}
