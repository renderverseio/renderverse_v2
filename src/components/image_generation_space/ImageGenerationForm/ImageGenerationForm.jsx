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
  Button,
} from "@chakra-ui/react";

import React, { useState } from "react";

import { Grid as GridLoader } from "react-loader-spinner";

import axios from "axios";
import { blobToBase64 } from "@/utils/blobTobase64";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CreditsCheckerComponent from "@/components/image_generation_space/CreditsCheckerComponent/CreditsCheckerComponent";
import { TStatus } from "@/utils/status";

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
      value: "photorealism",
    },
    {
      name: "Art",
      value: "art",
    },
    {
      name: "Anime",
      value: "anime",
    },
  ];

  async function refetch() {
    const img = await axios.get(imgSrc, { responseType: "blob" });
    const data = img.data;
    blobToBase64(data).then((b) => {
      setBlob(b);
    });
  }

  const [blob, setBlob] = useState(null);

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
            <RadioGroup
              defaultValue={model}
              my={2}
              onChange={setModel}
              value={model}
            >
              <Stack direction="row">
                {models.map((s, i) => (
                  <Radio key={i} value={s.value}>
                    {s.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
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

      <Flex
        flexDir={"column"}
        rowGap="1rem"
        justifyContent="center"
        alignItems={"center"}
      >
        <CreditsCheckerComponent
          onClick={() => {
            setBlob(null);
            generateImage();
          }}
          onClickText="Generate Image"
          hasCredits={hasCredits}
        />
      </Flex>

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
          {status === TStatus.fetching && <GridLoader color="gray" />}
          {status === TStatus.idle && <Text>Search!</Text>}
          {status === TStatus.fetched && imgSrc && !blob && (
            <Grid>
              <Text mb={2}>Image Generated</Text>
              <Button size="sm" onClick={refetch}>
                Show Image
              </Button>
            </Grid>
          )}
        </Flex>

        {status === "fetched" && (
          <Image
            borderRadius={"lg"}
            maxW="512px"
            objectFit={"contain"}
            src={blob}
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
