import axios from "axios";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Spaces from "../Spaces";
import spacesData from "@/data/spaces/spacesData";
import Navbar from "@/components/common/Navbar";
import { Box, Container } from "@chakra-ui/react";

function SpaceFactory() {
  const params = useParams();
  const [access, setAccess] = useState(false);

  // useEffect(() => {
  //   const code = params.refCode;
  //   axios({
  //     method: "POST",
  //     url: "https://opai.renderverse.io/check-ref",
  //     data: { refCode: code },
  //   })
  //     .then((res) => {
  //       setAccess(res.data.hasAccess);
  //     })
  //     .catch((err) => {
  //       setAccess(false);
  //       console.log(err);
  //     });
  // }, [params]);

  // if (access) {
  // }

  return spacesData.map((s, k) => {
    if (s.link === params.space)
      return (
        <Box>
          <Navbar />
          <Container
            py={12}
            minH={{ base: "auto", xl: "100vh" }}
            mx="auto"
            maxW={{
              base: "100%",
              md: "90%",
              lg: "80%",
              xl: "65%",
              "2xl": "60%",
            }}
          >
            <s.component key={k} />
          </Container>
        </Box>
      );
  });
  return <Spaces />;
}

export default SpaceFactory;
