import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Tag,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";

import { FaBoxes } from "react-icons/fa";
import { Audio } from "react-loader-spinner";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent";

export default function ImageGenerationForm({
  input,
  setInput,
  model,
  setModel,
  generateImage,
  hasCredits,
  imgSrc,
  status,
}) {
  const models = [
    {
      name: "Realism",
      value: "absolute-reality-v1-8-1",
    },
    {
      name: "Art",
      value: "dream-shaper-v8",
    },
  ];
  return (
    <Grid
      rowGap={"1rem"}
      columnGap={"1rem"}
      gridTemplateColumns={{
        base: "1fr",
      }}
      mb={12}
    >
      <CCard
        type="s"
        props={{
          display: "grid",
          rowGap: "1rem",
          borderRadius: "lg",
          p: 4,
          className: "glass_effect",
          bg: "gray.50",
          backgroundSize: "cover",
          border: "2px",
          borderColor: "white",
          boxShadow: "sm",
        }}
      >
        <FormControl>
          <FormLabel>Prompt</FormLabel>
          <Input
            variant={"unstyled"}
            borderRadius="lg"
            p={2}
            className="glass_effect"
            bg="gray.50"
            border="2px"
            borderColor="white"
            boxShadow="sm"
            value={input}
            onChange={(i) => setInput(i.target.value)}
            placeholder="Muskmelon"
            fontFamily={"Inter"}
          />
        </FormControl>

        <Flex>
          <FormControl>
            <FormLabel>Style</FormLabel>
            <RadioGroup my={2} onChange={setModel} value={model}>
              <Stack direction="row">
                {models.map((s, i) => (
                  <Radio key={i} value={s.value}>
                    {s.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>

            <CreditsCheckerComponent
              onClick={generateImage}
              onClickText="Generate Image"
              hasCredits={hasCredits}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Examples</FormLabel>
            {tags.map((h, i) => (
              <Tag
                my={2}
                mr={2}
                cursor="pointer"
                onClick={() => setInput(h)}
                key={i}
              >
                {h}
              </Tag>
            ))}
          </FormControl>
        </Flex>
      </CCard>

      <CCard
        type={"s"}
        props={{
          pos: "relative",
          borderRadius: "lg",
          className: "glass_effect",
          bg: "gray.50",
          backgroundSize: "cover",
          border: "2px",
          borderColor: "white",
          boxShadow: "sm",
          minH: { base: "50vh" },
          display: "flex",
          p: 4,
          justifyContent: "center",
        }}
      >
        <CCard
          type="d"
          props={{
            left: 0,
            top: 0,
            px: 2,
            py: 1,
            pos: "absolute",
          }}
        >
          <CText size={3} title="Image Output" />
        </CCard>
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
            maxW="512px"
            objectFit={"contain"}
            src={imgSrc}
          />
        )}
      </CCard>
    </Grid>
  );
}

const tags = [
  "Elon Musk with tesla",
  "Monkey with banana",
  "Tiger with Hat",
  "Apple Tree",
  "Andriod",
  "AI",
];
