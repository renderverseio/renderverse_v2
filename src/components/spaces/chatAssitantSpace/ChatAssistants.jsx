import {
  chatAssitantsAvatarsData,
  chatAssitantsAvatarsOptionsData,
} from "@/data/spaces/chatAssitantData";

import {
  Box,
  Flex,
  Grid,
  Text,
  Image
} from "@chakra-ui/react";

import React from "react";

import ProptTypes from 'prop-types'

const ChatAssistants = ({
  setAssistantIndex,
  setAssistant,
  setIsAssistantSelected,
}) => {
  return (
    <React.Fragment>
      <Box bg="white" boxShadow={"lg"} borderRadius="lg" mt={12} p={4}>
        <Text
          variant={"unstyled"}
          p={4}
          fontSize={{ base: "md", md: "lg", xl: "xl" }}
          fontWeight="bold"
        >
          Choose your AI assitance
        </Text>
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
              onClick={() => {
                setAssistant(o);
                setAssistantIndex(i);
                setIsAssistantSelected(true);
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
      </Box>
    </React.Fragment>
  );
}


ChatAssistants.propTypes = {
  setPerson: ProptTypes.func,
  setIndex: ProptTypes.func,
  setIsSelected: ProptTypes.func
}
export default ChatAssistants
