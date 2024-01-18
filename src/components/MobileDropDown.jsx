import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Icon,
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

export default function MobileDropDown() {
  const menuItems = [
    `Pricing`,
    `Dashboard`,
    `Templates`,
    `Documentation`,
    `Tutorials`,
    `Blog`,
    `User Stories`,
    `Changelog`,
  ];
  return (
    <Popover boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Icon></Icon>
      </PopoverTrigger>
      <PopoverContent
        boxShadow={"none"}
        outline="none"
        border="none"
        mx="auto"
        bg="transparent"
        _focus={{
          outline: "none",
          border: "none",
          boxShadow: "none",
        }}
      >
        <PopoverArrow />
        <Flex mx={4} justifyContent={"flex-end"}>
          <Grid>
            {menuItems.map((menuItem, i) => (
              <Box
                borderTopRadius={i === 0 ? "lg" : "none"}
                borderBottomRadius={i === menuItems.length - 1 ? "lg" : "none"}
                bg={i === 0 ? "gray.100" : "white"}
                px={{ base: 8 }}
                display={"flex"}
                justifyContent="center"
                alignItems={"flex-start"}
                flexDir="column"
                p={{ base: 4 }}
                borderBottom={
                  i === menuItems.length - 1 ? null : `1px solid #F1F0E8`
                }
                key={i}
                cursor="pointer"
              >
                <Text fontWeight={"bold"}>{menuItem}</Text>
              </Box>
            ))}
          </Grid>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
