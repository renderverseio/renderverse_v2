import CText from "@/components/typography/CText/CText";
import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";

import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { StakingImages } from "@/data/dapp/dappData";

export default function ProductSuiteSection() {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
        <CHeading size={1} title={"Welcome to our bots"} />
        <Grid
          rowGap={"2rem"}
          columnGap={"2rem"}
          templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
          minH="40rem"
        >
          {data.map((c, i) => (
            <CCard
              key={i}
              props={{
                minH: "100%",
                borderRadius: "lg",
                p: 4,
                className: "glass_effect",
                bg: c.bg,
                h: "100%",
                bgImg: c.bgImg,
                display: "flex",
                flexDir: "column",
                justifyContent: "space-between",
                border: "2px",
                borderColor: "white",
                boxShadow: "sm",
              }}
            >
              <Box
                zIndex={3}
                backgroundImage={StakingImages[i]}
                backgroundSize="contain"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                minH="40rem"
                pos="absolute"
                w="94%"
              ></Box>
              <Grid mt={2} rowGap={"1rem"}>
                <CText
                  cprops={{ color: "gray.100" }}
                  size={1}
                  title={c.title}
                />
                <CText cprops={{ color: "gray.200" }} size={3} title={c.desc} />
              </Grid>
              <Button
                boxShadow={"lg"}
                bgImage={c.btnImg}
                zIndex={4}
                onClick={() => navigate(c.link)}
                mt={6}
              >
                {c.btnText}
              </Button>
            </CCard>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

const data = [
  {
    bgImg: `linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #312f50, #3f3463, #513774, #713e9a, #9740bf, #c33ae0, #f423ff);`,
    title: "AI Art Generator",
    desc: "Dive into the realm of artistic exploration with our advanced AI Art Generator. We've created a unique platform that allows you to unleash your creativity. We also enable users to easily mint and inscribe your unique creations as BRC-721 tokens instantly on the Bitcoin blockchain.",
    btnText: "Try Now",
    btnImg:
      "linear-gradient(to right bottom, #f423ff, #dc30ff, #c239ff, #a740ff, #8945ff)",
    link: "/dapp/image-generation",
  },
  {
    title: "AI Trading Bot",
    desc: "Seize trading opportunities like never before with our AI Trading Bot. We provide AI-driven insights and trends acorss all the coins in top exchanges. Use our intuitive telegram bot to seamlessly trade and maximise profits.",
    btnImg:
      "linear-gradient(to right bottom, #ff653f, #ff763c, #ff863b, #ff953c, #ffa440);",
    bgImg: `linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #362f4b, #4a3357, #62355f, #8f3a69, #bc3f67, #e34c59, #ff6640);`,
    btnText: "Get Plan",
  },
  {
    title: "GPT extensions and plugins",
    desc: "Discover our suite of extensions and plugins designed to unlock the full potential of GPT in your endeavors. We provide tools tailored specifically for web3 users to harness the power of GPT technology on the BRC20 ecosystem.",
    bgImg:
      "linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #2e2f4b, #36355b, #403a6a, #47498c, #4859b0, #3f6ad6, #177dfe);",
    btnImg:
      "linear-gradient(to right bottom, #1779ff, #008aff, #009aff, #00a9ff, #16b6fe);",
    btnText: "Coming Soon",
  },
];
