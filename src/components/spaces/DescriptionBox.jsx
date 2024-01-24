import { Box, Text } from "@chakra-ui/react";

export default function DescriptionBox({ title, desc }) {
  return (
    <Box
      display={"grid"}
      p={8}
      borderRadius={"lg"}
      bg="white"
      cursor="pointer"
      transition="all 300ms ease-in-out"
      boxShadow={"md"}
    >
      <Text textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl" }}>
        {title}
      </Text>
      <Text textAlign={"left"}>{desc}</Text>
    </Box>
  );
}
