import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Tag,
  Text,
  Grid,
  Radio,
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import React from "react";

import { FaBoxes } from "react-icons/fa";
import { Audio, } from "react-loader-spinner";

import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent";

export default function ImageGenerationForm({
  input,
  setInput,
  style,
  setStyle,
  hasCredits,
  imgSrc,
  status,
  generateImage,
  disconnect,
}) {
  const styles = [
    {
      name: "Realism",
      value: "photorealism"
    },
    {

      name: "Art",
      value: "artistic"
    },
    {
      name: "Anime",
      value: "anime"
    }
  ]
  return (
    <Grid
      rowGap={"2rem"}
      columnGap={"2rem"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <CCard type="s" props={{ padding: 6 }}>
        <FormControl >
          <CText size={2} title={"Input"} />
          <Input
            value={input}
            onChange={(i) => setInput(i.target.value)}
            placeholder="Muskmelon"
          />

          <CText size={2} title={"Style"} />
          <RadioGroup my={2} onChange={setStyle} value={style}>
            <Stack direction='row'>
              {styles.map((s, i) => <Radio key={i} value={s.value}>{s.name}</Radio>
              )}
            </Stack>
          </RadioGroup>

          <Box p={3}>
            <Flex columnGap=".4rem" alignItems={"center"}>
              <FaBoxes size={18} />
              <CText size={3} title="Examples" />
            </Flex>

            {tags.map((h, i) => (
              <Tag
                size="md"
                my={2}
                mx={2}
                cursor="pointer"
                onClick={() => setInput(h)}
                key={i}
              >
                {h}
              </Tag>
            ))}
          </Box>
          <Flex alignItems={"center"} justifyContent={"space-evenly"}>
            <CreditsCheckerComponent
              onClick={() => generateImage()}
              onClickText={`Generate Image`}
              hasCredits={hasCredits}
            />
            <Button ml={2} onClick={disconnect}>{`Disconnect Wallet`}</Button>
          </Flex>

        </FormControl>
      </CCard>

      <CCard type={"s"} props={{ pos: "relative" }}>
        <CCard
          type="d"
          props={{
            px: 2,
            py: 1,
            pos: "absolute",
            borderBottomRadius: "none",
            borderRightRadius: "none"
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
            width="100%"
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




