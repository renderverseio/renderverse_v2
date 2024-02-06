import CText from "@/components/typography/CText/CText";
import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";

import { Box, Button, Flex, Grid, } from "@chakra-ui/react";
import { gradientBgs } from "@/data/home/homeData";
import { useNavigate } from "react-router";

export default function OtherSample() {
  const navigate = useNavigate()
  return <Box>
    <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
      <CHeading size={1} title={"Welcome to our bots"} />

      <Grid rowGap={"2rem"} columnGap={"2rem"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
        {data.map((c, i) =>
          <CCard
            key={i}
            props={{
              borderRadius: "lg",
              borderColor: "gray.400",
              border: "1px",
              p: 4,
              bg: c.bg.bg,
              bgImage: c.bg.bgImg
            }}>

            <CText cprops={{ color: "gray.100" }} size={1} title={c.title} />
            <Grid mt={6} rowGap={"1rem"}>
              <CText cprops={{ color: "gray.100", fontWeight: "bold" }} size={3} title={c.desc} />
            </Grid>
            <Button onClick={() => navigate(c.link)} mt={6}>{c.btnText}</Button>

          </CCard>)}
      </Grid>

    </Flex>
  </Box>
}


const data = [
  {
    bg: gradientBgs[0],
    title: "Image Generation Algoritham",
    desc: 'These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.',
    btnText: "Try Now",
    link: "/dapp/image-generation"
  },
  {
    bg: gradientBgs[1],
    title: "ETH Sharing",
    desc: "Gain a competitive edge in trading with AigentXT, offering AI - powered real - time blockchain data analysis and smart contract security insights for informed investment decisions.",
    btnText: "Coming Soon",
  },
  {
    bg: gradientBgs[1],
    title: "AI Care Agent",
    desc: 'Unlock the power of digital support managers and scalable client service with 24 / 7 instant high - quality relevant responses in 100 + languages.',
    btnText: "Get Plan",
  }
]
