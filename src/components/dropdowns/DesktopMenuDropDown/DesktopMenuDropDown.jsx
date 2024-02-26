import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Box,
  Flex,
  Grid,
  Text,
  Image,
} from "@chakra-ui/react";

import { Link as HLink } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function DesktopMenuDropDown({ menu, options }) {
  const navigate = useNavigate();
  return (
    <Popover trigger="hover" boxShadow={"none"} outline="none" border="none">
      <PopoverTrigger onClick={() => navigate("/revshare")}>
        <Box>
          {menu === "Revshare" && (
            <HLink
              href={"/revshare"}
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {menu}
            </HLink>
          )}
          {menu !== "Revshare" && <Text fontWeight={"bold"}>{menu}</Text>}
        </Box>
      </PopoverTrigger>
      {options.length > 0 && (
        <PopoverContent
          boxShadow={"none"}
          outline="none"
          w="550px"
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
              rowGap={".5rem"}
              columnGap=".5rem"
              p={4}
              gridTemplateColumns={"1fr 1fr"}
              borderRadius="lg"
              boxShadow={"xl"}
            >
              {options.map((option, i) => (
                <Box
                  boxShadow={"0px 0px 3px -2px gray"}
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
                  <HLink
                    href={option.link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent="space-between"
                      columnGap={"1rem"}
                    >
                      <Image maxW={"32px"} src={option.icon} />
                      <Box>
                        <Text fontWeight={"bold"}>{option.title}</Text>
                        <Text fontSize={"sm"}>{option.subText}</Text>
                      </Box>
                    </Flex>
                  </HLink>
                </Box>
              ))}
            </Grid>
          </Flex>
        </PopoverContent>
      )}
    </Popover>
  );
}
