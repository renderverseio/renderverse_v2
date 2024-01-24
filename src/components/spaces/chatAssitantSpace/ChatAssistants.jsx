import {
  chatAssitantsAvatarsData,
  chatAssitantsAvatarsOptionsData,
} from "@/data/spaces/chatAssitantData";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";

export default function ChatAssistants({
  setPerson,
  setIndex,
  input,
  setInput,
  setIsSelected,
  generatePrompt,
}) {
  return (
    <FormControl bg="white" boxShadow={"lg"} borderRadius="lg" mt={12} p={4}>
      <FormLabel
        variant={"unstyled"}
        p={4}
        fontSize={{ base: "md" }}
        fontWeight="bold"
      >
        Choose your AI assitance
      </FormLabel>
      <Grid
        rowGap={"2rem"}
        columnGap="2rem"
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        p={5}
      >
        {chatAssitantsAvatarsOptionsData.map((o, i) => (
          <Flex
            border={"1px"}
            borderRadius={"lg"}
            boxShadow={"lg"}
            p={0}
            m={0}
            onClick={() => {
              setPerson(o);
              setIndex(i);
              setIsSelected(true);
            }}
            cursor={"pointer"}
            alignItems={"center"}
            columnGap={"1rem"}
            key={i}
          >
            <Image
              borderRadius="md"
              borderRightRadius={"none"}
              minW="64px"
              minH="64px"
              maxW="64px"
              maxH="64px"
              objectFit={"cover"}
              src={chatAssitantsAvatarsData[i]}
            ></Image>
            <Text>{o}</Text>
          </Flex>
        ))}
      </Grid>

      <FormControl border="1px" borderRadius={"lg"} boxShadow={"lg"}>
        <Input
          value={input}
          onChange={(i) => setInput(i.target.value)}
          placeholder="send"
          variant={"unstyled"}
          p={4}
          fontSize={{ base: "md" }}
          fontWeight="bold"
          onKeyDown={(e) => {
            if (e.key === "Enter") generatePrompt();
          }}
        />
        <Box
          cursor={"pointer"}
          pos="absolute"
          zIndex={999}
          right={{ base: "8%", lg: "4%", xl: "2%" }}
          top={"30%"}
          onClick={() => generateMusic()}
        >
          <FaForward size={32} />
        </Box>
      </FormControl>
    </FormControl>
  );
}
