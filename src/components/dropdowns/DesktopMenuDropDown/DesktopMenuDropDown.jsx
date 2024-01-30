import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Box,
  Flex,
  Grid,
  Text,
  Icon,
} from "@chakra-ui/react";

export default function DesktopMenuDropDown({ menu, options }) {
  return (
    <Popover trigger="hover" boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Text fontWeight={"bold"}>{menu}</Text>
      </PopoverTrigger>
      {options.length > 0 ? (
        <PopoverContent
          boxShadow={"none"}
          outline="none"
          border="none"

          _focus={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
        >
          <PopoverArrow />
          <Flex justifyContent={"flex-end"}>
            <Grid
              w="100%"
              rowGap={".5rem"}
              columnGap=".5rem"
              p={4}
              gridTemplateColumns={"1fr"}
              borderRadius="lg"
              boxShadow={"dark-lg"}
            >
              {options.map((option, i) => (
                <Box
                  boxShadow={"lg"}
                  borderRadius="lg"
                  transition={"all 400ms ease-in-out"}
                  _hover={{ bg: "gray.200" }}
                  px={{ base: 8 }}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  flexDir="column"
                  p={{ base: 4 }}
                  key={i}
                  cursor="pointer"
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    columnGap={"1rem"}
                  >
                    <Icon></Icon>
                    <Box>
                      <Text fontWeight={"bold"}>{option.title}</Text>
                      <Text fontSize={"sm"}>{option.subText}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Flex>
        </PopoverContent>
      ) : null}
    </Popover>
  );
}
