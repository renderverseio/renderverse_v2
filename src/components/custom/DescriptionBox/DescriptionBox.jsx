import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";

import { Box, Divider } from "@chakra-ui/react";

export default function DescriptionBox({ title, desc }) {
  return (
    <CCard
      type="s"
      props={{
        minH: "100%",
        borderRadius: "lg",
        p: 4,
        h: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        border: "2px",
        borderColor: "white",
        bg: "gray.50",
        boxShadow: "sm",
        columnGap: "2rem",
      }}
    >
      <Box rowGap={".2rem"} display={"grid"} p={4} py={6}>
        <CHeading data-testid="title" title={title} size={2} />
        <Divider my={2} />
        <CText data-testid="desc" size={2} title={desc} />
      </Box>
    </CCard>
  );
}
