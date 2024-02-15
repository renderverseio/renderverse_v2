import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs, gradientBgs2 } from "@/data/home/homeData";
import { Box, Button, Flex, Grid, Tag } from "@chakra-ui/react";

import { StakingImages } from "@/data/dapp/dappData";
import { useNavigate } from "react-router";

export default function StakingSection() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
          <CHeading size={1} title={"Staking"} />
          <CCard
            props={{
              p: 4,
              className: "glass_effect",
              bg: "gray.50",
              border: "2px",
              borderColor: "white",
              boxShadow: "sm",
            }}
            type="s"
          >
            <CText size={1} title="Pool Size" />
            <CText
              size={3}
              title="Leverage the power of compounding by staking your $RDAI tokens and compounding rewards as they accrue"
            />
          </CCard>

          <Grid
            rowGap={"2rem"}
            columnGap={"2rem"}
            templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
          >
            {data.map((c, i) => (
              <CCard
                key={i}
                props={{
                  borderRadius: "lg",
                  p: 4,
                  className: "glass_effect",
                  border: "2px",
                  borderColor: "white",
                  boxShadow: "sm",
                  bgImg: c.bgImg,
                }}
              >
                <CHeading
                  cprops={{ color: "gray.100" }}
                  size={2}
                  title={c.days}
                />
                <CText
                  cprops={{ color: "gray.400" }}
                  size={1}
                  title={c.title}
                />
                <Grid mt={6} rowGap={"1rem"}>
                  {c.apr.map((d, j) => (
                    <Flex key={j}>
                      <Tag
                        bg="transparent"
                        boxShadow={"lg"}
                        borderRadius={"lg"}
                        key={j}
                      >
                        <CText
                          cprops={{ color: "gray.300" }}
                          size={3}
                          title={d}
                        />
                      </Tag>
                    </Flex>
                  ))}
                </Grid>
                <Button bgImage={c.btnImg} mt={6}>
                  Stake Now
                </Button>
              </CCard>
            ))}
          </Grid>

          <CCard
            props={{
              p: 4,
              bg: "gray.50",
              className: "glass_effect",
              border: "2px",
              borderColor: "white",
              boxShadow: "sm",
            }}
            type="s"
          >
            <Flex
              columnGap={"6rem"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <CText size={1} title="My Stakes & Rewards" />
                <CText size={3} title="You have no staked $RDAI" />
              </Box>
              <Button>Stake</Button>
            </Flex>
          </CCard>
        </Flex>
      </Box>
    </Box>
  );
}

const data = [
  {
    bgImg: `linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #312f50, #3f3463, #513774, #713e9a, #9740bf, #c33ae0, #f423ff);`,
    btnImg:
      "linear-gradient(to right bottom, #f423ff, #dc30ff, #c239ff, #a740ff, #8945ff)",
    days: "30 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
  },
  {
    days: "60 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
    btnImg:
      "linear-gradient(to right bottom, #ff653f, #ff763c, #ff863b, #ff953c, #ffa440);",
    bgImg: `linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #362f4b, #4a3357, #62355f, #8f3a69, #bc3f67, #e34c59, #ff6640);`,
  },
  {
    days: "90 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
    bgImg:
      "linear-gradient(to right bottom, #222527, #21272c, #212832, #232937, #27293c, #2e2f4b, #36355b, #403a6a, #47498c, #4859b0, #3f6ad6, #177dfe);",
    btnImg:
      "linear-gradient(to right bottom, #1779ff, #008aff, #009aff, #00a9ff, #16b6fe);",
  },
];
