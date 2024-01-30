import {
  Box,
  Text,
  Flex,
  GridItem,
  Grid,
  Button,
  Tag,
  Image,
  Divider,
} from "@chakra-ui/react";

import { modelsData } from "@/data/models/ModelsData.js";
import Logo from "@/assets/logo.svg"

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Navbar from "@/components/common/Navbar/Navbar";
import CCard from "@/components/custom/CCard/CCard";
import SpacesContainer from "@/components/containers/SpaceContainer/SpacesContainer";


export default function Model() {
  const params = useParams();

  const [model, setModel] = useState({
    description: "",
    tags: [],
    url: "",
    service_id: "",
    org_id: "",
    contributors: [],
    service_rating: {
      rating: 5,
      total_users_rated: 1,
    },
    media: {
      url: "",
    },
    org_assets_url: {
      hero_image: "",
    },
  });

  useEffect(() => {
    modelsData.map((m) => {
      if (m.service_id === params.model) {
        setModel(m);
        return;
      }
    });
  }, [params.model]);

  let p = model.url.split("/");
  p = p[p.length - 1];

  return (
    <Box>
      <Navbar />
      <SpacesContainer>
        <Grid
          rowGap={"3rem"}
          p={4}
          templateColumns={{ base: "1fr" }}
          pb={{ base: 0, lg: 0 }}
        >
          <CCard type="s">
            <Grid p={4} rowGap="1rem">
              <Flex
                rowGap={"1rem"}
                columnGap="2rem"
                alignItems={{ base: "start", lg: "start" }}
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={{ base: "start", lg: "start" }}
              >
                <Image
                  minW="168"
                  minH={"168"}
                  maxW="168"
                  borderRadius={"md"}
                  maxH={"168"}
                  objectFit="cover"
                  src={model.media.url}
                ></Image>
                <Box>
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    rowGap="1rem"
                    alignItems={{ base: "flex-start", lg: "center" }}
                    columnGap="1rem"
                  >
                    <Image
                      maxH="16"
                      maxW="20"
                      src={Logo}
                    />
                    <Box>
                      <Text
                        fontWeight="bold"
                        lineHeight=".8"
                        fontSize={{ base: "sm", lg: "md" }}
                      >
                        Renderverse AI
                      </Text>
                      <Text
                        fontSize={{ base: "lg", lg: "xl" }}
                      >
                        Renderverse AI
                      </Text>
                    </Box>
                  </Flex>
                  <Text
                    textAlign={"left"}
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight={{ base: "bold", lg: "normal" }}
                  >
                    {model.display_name}
                  </Text>
                  <Button
                    textAlign={"left"}
                    mt={2}
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight={{ base: "bold", lg: "normal" }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Flex>
            </Grid>
          </CCard>

          <CCard props={{ padding: 4 }} type="s">
            <TabContent
              service_id={model.service_id}
              description={model.description}
              lang={dappData.integration[1].lang}
              dappData={dappData.integration[1]}
              p={p}
              tags={model.tags}
            />
          </CCard>
        </Grid>
      </SpacesContainer>
    </Box >
  );
}

function TabContent({ dappData, p, url, lang, description, service_id, tags }) {
  return (
    <Box display={"grid"} rowGap={"2rem"}>
      <CCard props={{ padding: 4 }} type="s">
        <Flex flexDirection={"column"} columnGap={"2rem"}>
          <Text fontSize="2xl">Project Details</Text>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"space-evenly"}
            rowGap={"1rem"}
            columnGap={"1rem"}
          >
            <Divider />
            <Flex
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
              borderBottom={{
                lg: "none",
              }}
            >
              <Text fontWeight="bold">Organization ID</Text>
              <Text>Renderverse AI</Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Text>Service ID</Text>
              <Text>{service_id}</Text>
            </Flex>
            <Divider />
          </Box>
        </Flex>
      </CCard>

      <Grid
        columnGap="2rem"
        gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }}
      >
        <CCard props={{ padding: 4 }} type="s">
          <Box width="100%" display="grid" rowGap="2rem">
            <Text
              fontSize={"2xl"}
            >
              Overview
            </Text>
            <Text
              fontSize={{ base: "x-small", sm: "sm", md: "md" }}
            >
              <span
                style={{ display: "inline-block", lineBreak: "anywhere" }}
                dangerouslySetInnerHTML={{ __html: description }}
              ></span>
            </Text>
          </Box>
        </CCard>
        <CCard props={{ padding: 4 }} type="s">
          <Grid gridTemplateColumns={{ base: "1fr" }}>
            <Text fontSize={"2xl"}>Tags</Text>
            <Box
              width="100%"
              rowGap="1rem"
              height="100%"
              display="grid"
              columnGap={"1rem"}
              justifyContent={"space-evenly"}
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
            >
              {tags.map((tag, i) => (
                <Flex justifyContent={"center"} width="100%" key={i}>
                  <Tag
                    maxH="42px"
                    textAlign={"center"}
                    width={"100%"}
                  >
                    {tag}
                  </Tag>
                </Flex>
              ))}
            </Box>
          </Grid>
        </CCard>
      </Grid>
      <Text fontSize={"2xl"}>Integration Setup ( {lang})</Text>
      <Text fontSize={{ base: "xs", lg: "sm" }}>{dappData.desc}</Text>
      <Flex
        rowGap="1rem"
        columnGap={"1rem"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Button
          onClick={() => {
            fetch(url, {
              mode: "no-cors",
            })
              .then((transfer) => {
                return transfer.blob(); // RETURN DATA TRANSFERED AS BLOB
              })
              .then((bytes) => {
                let elm = document.createElement("a"); // CREATE A LINK ELEMENT IN DOM
                elm.href = URL.createObjectURL(bytes); // SET LINK ELEMENTS CONTENTS
                elm.setAttribute("download", "test.zip"); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
                elm.click(); // TRIGGER ELEMENT TO DOWNLOAD
              })
              .catch((error) => {
                console.log(error); // OUTPUT ERRORS, SUCH AS CORS WHEN TESTING NON LOCALLY
              });
          }}
        >
          DOWNLOAD INTEGRATION FILES
        </Button>
      </Flex>
      <Text fontSize={"2xl"}>Setting Up Files</Text>
      {dappData.steps.map((step, f) => (
        <Box key={f}>
          <Text px={2} fontSize={{ base: "sm", md: "lg" }}>{step.title}</Text>
          <CCard type="s">
            <Box border="2px" my={2} p={2} borderRadius="md">
              {step.code.map((s, k) => (
                <Text
                  key={k}
                  fontSize={{ base: "xx-small", lg: "sm" }}
                >
                  {s} {k === 0 ? `${p}` : ""}
                </Text>
              ))}
            </Box>
          </CCard>
        </Box>
      ))}
    </Box>
  );
}



export const dappData = {
  main: "PROVIDER",
  sub: "Native Intelligence",
  title: "Semantic Similarity Binary",
  rating: [0, 1, 2, 3],
  totalRatins: 20,
  about:
    "Semantic Similarity Binary: Provide multiple English texts (limited to 60 words each) and identify whether the texts are semantically similar.",
  tags: ["detection", "paraphrase", "semantic", "similarity"],
  projectUrl: "https://github.com/iktina/semantic-similar",
  organizationId: "naint",
  serviceId: "semantic-similarity-binary",
  contributors: ["John Doe"],
  integration: [
    {
      lang: "Node Js",
      desc: "Download the Node SDK to help you integrate this AI service with your application. Once you setup your configuration, use the token generator below to test the servcie with a number of free calls.",
      steps: [
        {
          title: "Download and extract integration files",
          code: ["cd "],
        },
        {
          title: "Create and activate virtual environment",
          code: [
            "# For unix/macOS:",
            "-sudo apt-get install python3-venv",
            "-sudo python3 -m venv venv",
            "-source ./venv/bin/activate",
            "# For Windows:",
            "-py -m pip install --user virtualenv",
            "-py -m venv venv",
            "-./venv/Scripts/activate",
          ],
        },
        {
          title: "Install python requirements",
          code: [`pip install -r requirement.txt`],
        },
        {
          title: "update config.py with the following points",
          code: [
            "1. update <your wallet's private key> with your wallet's private key",
            "2. update <your infura key> with your infura provider key",
          ],
        },
        {
          title: "update service.py with the following points",
          code: [
            "1. update service_stub with your service stub from <stub>_pb2_grpc.py file",
            "2. update input_method with your service's input method",
            "3. update arguments with your service's arguments",
            "4. update service_method with your service's output method",
            "# This is an example snippet, change accordingly to the interested service",
            `service_client = sdk.create_service_client(
          org_id=config.ORG_ID,
          service_id=config.SERVICE_ID,
          service_stub= example_service_pb2_grpc.CalculatorStub
          )`,
            "request = example_service_pb2.Numbers(a=10, b=2)",
            "response = service_client.service.add(request)",
          ],
        },
        {
          title: "Invoke service by running",
          code: ["python service.py"],
        },
      ],
    },
    {
      lang: "Python",
      desc: "Download the Python SDK to help you integrate this AI service with your application. Once you setup your configuration, use the token generator below to test the servcie with a number of free calls.",
      steps: [
        {
          title: "Download and extract integration files",
          code: ["cd "],
        },
        {
          title: "Create and activate virtual environment",
          code: [
            "# For unix/macOS:",
            "-sudo apt-get install python3-venv",
            "-sudo python3 -m venv venv",
            "-source ./venv/bin/activate",
            "# For Windows:",
            "-py -m pip install --user virtualenv",
            "-py -m venv venv",
            "-./venv/Scripts/activate",
          ],
        },
        {
          title: "Install python requirements",
          code: [`pip install -r requirement.txt`],
        },
        {
          title: "update config.py with the following points",
          code: [
            "1. update <your wallet's private key> with your wallet's private key",
            "2. update <your infura key> with your infura provider key",
          ],
        },
        {
          title: "update service.py with the following points",
          code: [
            "1. update service_stub with your service stub from <stub>_pb2_grpc.py file",
            "2. update input_method with your service's input method",
            "3. update arguments with your service's arguments",
            "4. update service_method with your service's output method",
            "# This is an example snippet, change accordingly to the interested service",
            `service_client = sdk.create_service_client(
          org_id=config.ORG_ID,
          service_id=config.SERVICE_ID,
          service_stub= example_service_pb2_grpc.CalculatorStub
          )`,
            "request = example_service_pb2.Numbers(a=10, b=2)",
            "response = service_client.service.add(request)",
          ],
        },
        {
          title: "Invoke service by running",
          code: ["python service.py"],
        },
      ],
    },
  ],
};


