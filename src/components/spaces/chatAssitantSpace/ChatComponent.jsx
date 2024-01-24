import { chatAssitantsAvatarsData } from "@/data/spaces/chatAssitantData";
import { Flex, Box, FormControl, Grid, GridItem, Input, Text, Image } from "@chakra-ui/react";
import { FaForward, FaUser } from "react-icons/fa";

function ChatComponent({
  chatPrompts,
  typing,
  assistant,
  assistantIndex,
  input,
  setInput,
  generateChatPrompt,
}) {
  return (
    <Grid bg="white" my={5} p={4} boxShadow={"lg"} borderRadius={"lg"}>
      <GridItem pos="relative">
        <Box display={"flex"} flexDirection="column">
          {chatPrompts.map((p, i) => (
            <Box columnGap={"2rem"} key={i} display="flex">
              {i % 2 === 0 && (
                <Box
                  display={"flex"}
                  alignItems="center"

                  justifyContent={"flex-end"}
                >
                  <FaUser size={32} />
                </Box>
              )}

              <Text
                my={4}
                p={3}
                borderRadius="md"
                width="100%"
                mx="auto"
                fontSize={{ base: "sm" }}
              >
                {p}
              </Text>

              {i % 2 === 0 && (
                <Box
                  display={"flex"}
                  alignItems="center"
                  border="2px"
                  justifyContent={"flex-end"}
                >
                  <Image
                    borderRadius={"md"}
                    maxW="48px"
                    maxH="48px"
                    objectFit={"contain"}
                    src={chatAssitantsAvatarsData[assistantIndex]}
                  ></Image>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </GridItem>
      <GridItem>
        {typing && (
          <Flex
            pb={8}
            fontSize={{ base: "sm", lg: "lg" }}
            pr={12}
            justifyContent={"flex-end"}
            alignItems="center"
            columnGap={".5rem"}
          >
            <Text fontSize={{ base: "md" }} fontWeight="bold">
              {assistant} is typing...
            </Text>
          </Flex>
        )}
      </GridItem>
      <FormControl border="1px" borderRadius={"lg"} boxShadow={"lg"}>
        <Input
          value={input}
          onChange={(i) => setInput(i.target.value)}
          placeholder="send"
          variant={"unstyled"}
          p={4}
          fontSize={{ base: "md" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") generateChatPrompt();
          }}
        />
        <Box
          cursor={"pointer"}
          pos="absolute"
          zIndex={999}
          right={{ base: "8%", lg: "4%", xl: "2%" }}
          top={"30%"}
          onClick={() => generateChatPrompt()}
        >
          <FaForward size={32} />
        </Box>
      </FormControl>
    </Grid>
  );
}
export default ChatComponent;
