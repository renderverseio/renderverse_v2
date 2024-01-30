import CText from "@/components/typography/CText/CText";
import { Box } from "@chakra-ui/react";

export default function TokenTableHeader({ exchange }) {
  return <Box
    borderRadius={"md"}
    borderBottomRadius="none"
    px={2}
    py={1}
    border="2px"
  >
    <CText size={2} title={`${exchange} coins`} />
  </Box>

}
