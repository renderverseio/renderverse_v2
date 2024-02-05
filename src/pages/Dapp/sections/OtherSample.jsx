import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Button, Flex, Grid, Tag, } from "@chakra-ui/react";

export default function OtherSample() {
  return <Box>
    <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
      <CHeading size={1} title={"Welcome to our bots"} />

      <Grid rowGap={"2rem"} columnGap={"2rem"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
        {data.map((c, i) =>
          <CCard

            key={i}
            props={{
              borderRadius: "lg",
              p: 4,
              bg: c.bg.bg,
              bgImage: c.bg.bgImg
            }}>

            <CText cprops={{ color: "gray.100" }} size={1} title={c.title} />
            <Grid mt={6} rowGap={"1rem"}>
              <CText cprops={{ color: "gray.100", fontWeight: "bold" }} size={3} title={c.desc} />
            </Grid>
            <Button mt={6}>{c.btnText}</Button>

          </CCard>)}
      </Grid>

    </Flex>
  </Box>
}


const data = [
  {
    bg: gradientBgs[0],
    title: "AI Community Manager",
    desc: 'Boost community interaction with AigentXC, delivering 24 / 7 support and multilingual engagement through advanced AI - driven management.',
    btnText: "Contact Sales",
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
