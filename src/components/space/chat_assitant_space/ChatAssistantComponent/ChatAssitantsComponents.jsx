import {
  chatAssitantsAvatarsData,
  chatAssitantsAvatarsOptionsData,
} from "@/data/spaces/chatAssitantData";

import {
  Flex,
  Grid,
  Image
} from "@chakra-ui/react";

import React from "react";

import ProptTypes from 'prop-types'

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";

const ChatAssistantsComponent = ({
  setAssistantIndex,
  setAssistant,
  setIsAssistantSelected,
}) => {
  return (
    <React.Fragment>
      <CCard props={{ padding: 6 }} type="s" >
        <CText size={2} title={"Choose your AI assitance"} />
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
            <CCard
              key={i}
              type="d"
              props={{ border: "1px" }}
            >
              <Flex
                onClick={() => {
                  setAssistant(o);
                  setAssistantIndex(i);
                  setIsAssistantSelected(true);
                }}
                alignItems={"center"}
                columnGap={"1rem"}
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
                <CText size={3} title={o} />
              </Flex>
            </CCard>
          ))}
        </Grid>
      </CCard>
    </React.Fragment>
  );
}


ChatAssistantsComponent.propTypes = {
  setPerson: ProptTypes.func,
  setIndex: ProptTypes.func,
  setIsSelected: ProptTypes.func
}
export default ChatAssistantsComponent
