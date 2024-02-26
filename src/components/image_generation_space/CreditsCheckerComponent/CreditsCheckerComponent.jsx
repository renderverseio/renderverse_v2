import { Box, Flex, Text } from "@chakra-ui/react";

export default function CreditsCheckerComponent({
  onClick,
  onClickText,
  hasCredits,
}) {
  return (
    <Box py={4}>
      <Flex alignItems="center">
        {hasCredits ? (
          <Box
            className="btn btn-2"
            p={5}
            fontWeight="bold"
            color="white"
            borderRadius="lg"
            boxShadow={"lg"}
            fontSize="xl"
            onClick={onClick}
          >
            {onClickText}
          </Box>
        ) : (
          <Box>
            <Text fontWeight="bold" size={{ base: "sm", lg: "lg" }}>
              Oops credits has expired, please contact team
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
