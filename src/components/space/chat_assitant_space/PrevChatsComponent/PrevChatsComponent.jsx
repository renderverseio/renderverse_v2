


import { Grid, Tag, } from "@chakra-ui/react";

import { namedMonthsData } from "@/data/spaces/chatAssitantData";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function PrevChatsComponent({
  chatHistory,
  setModalIsOpen,
  setShowChat,
  getMonthChats,
}) {
  return (
    <CCard type="s" props={{ p: { base: 2, lg: 12 } }} >
      <CHeading title={`Previous Chats`} size={2} />
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
      >
        {chatHistory.map((c, l) => (
          <Tag
            onClick={() => {
              setModalIsOpen(true);
              setShowChat(true);
              getMonthChats(c);
            }}
            my={4}
            p={3}
            key={l}
          >
            <CText size={3} title={namedMonthsData[c]} />
          </Tag>
        ))}
      </Grid>
    </CCard >
  );
}
