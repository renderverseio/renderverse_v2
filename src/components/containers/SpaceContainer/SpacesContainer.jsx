import { Container } from "@chakra-ui/react";

export default function SpacesContainer({ children }) {
  return <Container
    py={12}
    minH={{ base: "auto", xl: "100vh" }}
    mx="auto"
    maxW={{
      base: "100%",
      md: "90%",
      lg: "80%",
      xl: "65%",
      "2xl": "60%",
    }}
  >{children}</Container>
}
