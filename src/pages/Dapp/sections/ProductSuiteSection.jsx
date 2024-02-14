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
                backgroundPosition="bottom"
                backgroundRepeat="no-repeat"
                minH="40rem"
                pos="absolute"
                w="100%"
              ></Box>
              <Grid mt={2} rowGap={"1rem"}>
                <CText
                  cprops={{ color: "gray.100" }}
                  size={1}
                  title={c.title}
                />
                <CText cprops={{ color: "gray.200" }} size={3} title={c.desc} />
              </Grid>
              <Button zIndex={4} onClick={() => navigate(c.link)} mt={6}>
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
    bgImg: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    title: "AI Art Generator",
    desc: "Dive into the realm of artistic exploration with our advanced AI Art Generator. We've created a unique platform that allows you to unleash your creativity. We also enable users to easily mint and inscribe your unique creations as BRC-721 tokens instantly on the Bitcoin blockchain.",
    btnText: "Try Now",
    link: "/dapp/image-generation",
  },
  {
    bgImg: "linear-gradient(to right, #c31432, #240b36);",
    title: "AI Trading Bot",
    desc: "Seize trading opportunities like never before with our AI Trading Bot. We provide AI-driven insights and trends acorss all the coins in top exchanges. Use our intuitive telegram bot to seamlessly trade and maximise profits.",
    btnText: "Get Plan",
  },
  {
    bgImg: "linear-gradient(to right, #41295a, #2f0743);",
    title: "GPT extensions and plugins",
    desc: "Discover our suite of extensions and plugins designed to unlock the full potential of GPT in your endeavors. We provide tools tailored specifically for web3 users to harness the power of GPT technology on the BRC20 ecosystem.",
    btnText: "Coming Soon",
  },
];
