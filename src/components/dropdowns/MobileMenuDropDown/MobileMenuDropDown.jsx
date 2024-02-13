import { mobileMenuItems } from "@/data/home/navbarData";

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

import { MdOutlineMenuOpen } from "react-icons/md";

export default function MobileMenuDropDown() {
  return (
    <Popover boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger>
        <Box>
          <Icon h={12} w={12} as={MdOutlineMenuOpen}></Icon>
        </Box>
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
            {mobileMenuItems.map((menuItem, i) => (
              <Box
                borderTopRadius={i === 0 ? "lg" : "none"}
                borderBottomRadius={
                  i === mobileMenuItems.length - 1 ? "lg" : "none"
                }
                bg={i === 0 ? "gray.100" : "white"}
                px={{ base: 8 }}
                display={"flex"}
                justifyContent="center"
                alignItems={"flex-start"}
                flexDir="column"
                p={{ base: 4 }}
                borderBottom={
                  i === mobileMenuItems.length - 1 ? null : `1px solid #F1F0E8`
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
