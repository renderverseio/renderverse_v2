import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";

import { Box, Button, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function WalletMenu({ menuButtons, menuBalance }) {
  return (
    <Grid
      backgroundImage={`linear-gradient(to right bottom, #fffcd6, #fff5d4, #ffefd4, #ffe9d5, #ffe4d6);`}
      rowGap={"2rem"}>
      <Grid py={3}>
        <Box bg="white" m={4} p={4} borderRadius={"lg"} display={"flex"} justifyContent={"center"} boxShadow={"lg"} flexDir={"column"} alignItems={"center"}>
          <CHeading size={2} title={menuBalance.value} />
          <CHeading size={3} title={menuBalance.key} />
          <Divider my={3} />
          <Flex alignItems={"center"}>
            <CText size={2} title={`Credits : `} />
            <CText size={1} cprops={{ fontWeight: "600" }} title={menuBalance.credits} />
          </Flex>
        </Box>
        {menuButtons.map((ibutton, i) =>
          <Button mx={4} my={1} key={i} onClick={ibutton.fn}>{ibutton.key}</Button>
        )}
      </Grid>
    </Grid>
  )
}
