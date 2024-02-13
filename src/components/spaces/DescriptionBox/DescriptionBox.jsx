import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";

import { Box, Divider, } from "@chakra-ui/react";


export default function DescriptionBox({ title, desc }) {
  return (
    <CCard type="s" props={{
      borderRadius: "lg",
      p: 4,
      className: "glass_effect",
      bg: "gray.50",
      backgroundSize: "cover",
      border: "2px",
      borderColor: 'white',
      boxShadow: "sm"
    }}>
      <Box rowGap={".2rem"} display={"grid"} p={4} py={6}>
        <CHeading data-testid="title" title={title} size={2} />
        <Divider my={2} />
        <CText data-testid="desc" size={2} title={desc} />
      </Box >
    </CCard >
  );
}
