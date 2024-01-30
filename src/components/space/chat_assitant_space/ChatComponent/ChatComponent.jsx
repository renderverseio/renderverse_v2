
import { FaUser } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { Grid, Flex, Box, Input, Image, InputGroup, InputRightElement } from "@chakra-ui/react";

import { chatAssitantsAvatarsData } from "@/data/spaces/chatAssitantData";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

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
    <CCard type="s" props={{ my: 5, p: 4 }}>
      <Grid rowGap="2rem">
        {chatPrompts.map((p, i) => (
          <Grid templateColumns={{ base: "1fr 1fr" }} key={i}>
            {i % 2 === 0 && (
              <Flex columnGap={"1rem"} alignItems="center" justifyContent={"flex-start"}>
                <FaUser size={24} />
                <CCard props={{ px: 4, py: 2 }} type="s" >
                  <CText size={2} title={p} />
                </CCard>
              </Flex>
            )}

            {i % 2 === 0 && (<Box></Box>)}
            {i % 2 !== 0 && (<Box></Box>)}

            {i % 2 !== 0 && (
              <Flex columnGap={"1rem"} alignItems="center" justifyContent={"flex-start"}>
                <CCard props={{ px: 4, py: 2 }} type="s"  >
                  <CText size={2} title={p} />
                </CCard>
                <Image
                  borderRadius={"md"}
                  maxW="48px"
                  maxH="48px"
                  objectFit={"contain"}
                  src={chatAssitantsAvatarsData[assistantIndex]}
                ></Image>
              </Flex>
            )}
          </Grid>
        ))}
      </Grid>

      {typing && (
        <Flex
          pr={12}
          pb={8}
          justifyContent={"flex-end"}
          alignItems="center"
        >
          <CText size={2} title={`${assistant} is typing...`} />
        </Flex>
      )}

      <InputGroup mt={6}>
        <InputRightElement
          boxShadow={"lg"}
          children={<AiOutlineSend />}
          size="lg"
        />
        <Input
          value={input}
          onChange={(i) => setInput(i.target.value)}
          placeholder="send"
          fontSize={{ base: "md" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") generateChatPrompt();
          }}
        />
      </InputGroup>

    </CCard >
  );
}

export default ChatComponent;
