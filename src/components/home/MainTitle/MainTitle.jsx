import CHeading from "@/components/typography/CHeading/CHeading";
import { Box } from "@chakra-ui/react";

export default function MainTitle() {
  return (
    <Box
      maxW={{ base: "100%", md: "90%", lg: "80%" }}
      mx="auto"
      textAlign={{ base: "left", md: "center" }}
    >
      <CHeading
        size={1}
        title={
          <>
            {`$RDAI is the first AI ORDINAL on `}
            <span className="gradient_text">BRC-20 Network</span>{" "}
          </>
        }
      />
    </Box>
  );
}
