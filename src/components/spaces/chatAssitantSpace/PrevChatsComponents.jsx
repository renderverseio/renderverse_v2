import { namedMonthsData } from "@/data/spaces/chatAssitantData";
import { Box, Grid, Text } from "@chakra-ui/react";

export default function PrevChatsComponent({
  chatHistory,
  setModalIsOpen,
  setShowChat,
  getMonthChats,
}) {
  return (
    <Box
      mx="auto"
      boxShadow="lg"
      p={{ base: 2, lg: 12 }}
      bg="white"
      borderRadius="md"
    >
      <Text textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl" }}>
        Previous Chats
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
      >
        {chatHistory.map((c, l) => (
          <Box
            onClick={() => {
              setModalIsOpen(true);
              setShowChat(true);
              getMonthChats(c);
            }}
            my={4}
            cursor="pointer"
            p={3}
            borderRadius="md"
            boxShadow={"lg"}
            fontWeight={"bold"}
            width="100%"
            mx="auto"
            fontSize={{ base: "sm" }}
            textAlign="center"
            key={l}
          >
            {namedMonthsData[c]}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
