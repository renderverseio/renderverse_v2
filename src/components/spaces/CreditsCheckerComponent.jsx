import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function CreditsCheckerComponent({ onClick, onClickText, hasCredits }) {

  return < Box py={4} >
    <Flex justifyContent={"center"} alignItems="center">
      {hasCredits ? (
        <Button onClick={onClick}>
          {onClickText}
        </Button>
      ) : (
        <Box>
          <Text
            fontWeight="bold"
            size={{ base: "sm", lg: "lg" }}
          >
            Oops credits has expired, please contact team
          </Text>
        </Box>
      )}
    </Flex>
  </Box >
}
