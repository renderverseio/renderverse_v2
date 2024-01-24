import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Image,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaBoxes } from "react-icons/fa";
import { Audio } from "react-loader-spinner";

export default function ImageGenerationForm({
  input,
  setInput,
  hasCredits,
  imgSrc,
  status,
  generateImage,
  disconnect,
}) {
  return (
    <React.Fragment>
      <GridItem bg="white" boxShadow={"md"} borderRadius="md">
        <FormControl px={8} py={8} borderRadius="md">
          <FormLabel fontSize={{ base: "lg" }}>Input</FormLabel>
          <Input
            value={input}
            onChange={(i) => setInput(i.target.value)}
            placeholder="Muskmelon"
            p={4}
            fontSize={{ base: "md" }}
          />
          <Box pb={6}>
            <Flex p={4} columnGap=".4rem" alignItems={"center"}>
              <FaBoxes size={18} />
              <Text size={"lg"} borderRadius="md">
                Examples
              </Text>
            </Flex>

            {headers.map((h, i) => (
              <Tag
                size={"lg"}
                mx={2}
                my={2}
                cursor="pointer"
                onClick={() => setInput(h)}
                key={i}
              >
                {h}
              </Tag>
            ))}
          </Box>
          {hasCredits && (
            <Button onClick={() => generateImage()}>Generate Image</Button>
          )}
          <Button ml={2} onClick={disconnect}>{`Disconnect Wallet`}</Button>
        </FormControl>

        <Box mx="auto" w="80%" py={4}>
          <Flex justifyContent={"center"} alignItems="center">
            {!hasCredits && (
              <Text size={{ base: "sm", lg: "lg" }}>
                Oops credits has expired, please contact team
              </Text>
            )}
          </Flex>
        </Box>
      </GridItem>

      <GridItem boxShadow={"md"} bg="white" pos="relative" borderRadius="lg">
        <Box
          px={2}
          py={1}
          pos="absolute"
          borderRadius={"lg"}
          boxShadow="xl"
          borderBottomRadius="none"
          borderRightRadius="none"
        >
          <Text fontWeight="bold" fontSize={{ base: "xs" }}>
            Image Output
          </Text>
        </Box>
        <Flex
          pos={"absolute"}
          zIndex={8}
          alignItems={"center"}
          height="100%"
          width="100%"
          justifyContent={"center"}
        >
          {status === "fetching" && <Audio />}
          {status === "idle" && <Text>Search!</Text>}
        </Flex>

        {status === "fetched" && (
          <Image
            borderRadius={"lg"}
            width="100%"
            objectFit={"contain"}
            src={imgSrc}
          />
        )}
      </GridItem>
    </React.Fragment>
  );
}

const headers = [
  "Elon Musk with tesla",
  "Monkey with banana",
  "Tiger with Hat",
  "Apple Tree",
  "Andriod",
  "AI",
];
