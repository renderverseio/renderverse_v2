import { Box, Button, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function WalletMenu({ menuButtons, menuBalance }) {
  return (
    <Grid rowGap={"2rem"}>
      <Grid py={3}>
        <Box m={4} p={4} borderRadius={"lg"} display={"flex"} justifyContent={"center"} boxShadow={"lg"} flexDir={"column"} alignItems={"center"}>
          <Heading>
            {menuBalance.value}
          </Heading>
          <Heading fontSize={{ base: "xl", lg: "2xl" }}>
            {menuBalance.key}
          </Heading>
          <Divider my={3} />
          <Flex alignItems={"center"}>
            <Text>Credits</Text> :
            <Text fontWeight={"bold"}> {menuBalance.credits}</Text>
          </Flex>
        </Box>
        {menuButtons.map((ibutton, i) =>
          <Button mx={4} my={1} key={i} onClick={ibutton.fn}>{ibutton.key}</Button>
        )}
      </Grid>
    </Grid>
  )
}
