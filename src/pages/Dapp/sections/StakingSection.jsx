import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Button, Flex, Grid, Tag, } from "@chakra-ui/react";

import { StakingImages } from "@/data/dapp/dappData";

export default function StakingSection() {
  return <Box>
    <Box>
      <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
        <CHeading size={1} title={"Staking"} />
        <CCard
          props={{
            p: 4,
            className: "glass_effect",
            bg: "gray.50",
            border: "2px",
            borderColor: 'white',
            boxShadow: "sm"
          }}
          type="s" >
          <CText size={1} title="Pool Size" />
          <CText size={3} title="Leverage the power of compounding by staking your $AIX tokens and compounding rewards as they accrue" />
        </CCard>

        <Grid rowGap={"2rem"} columnGap={"2rem"} templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}>
          {data.map((c, i) =>
            <CCard
              key={i}
              props={{
                borderRadius: "lg",
                bgImg: StakingImages[i],
                backgroundSize: "cover",
                p: 4,
                className: "glass_effect",
                border: "2px",
                borderColor: 'white',
                boxShadow: "sm"
              }}>

              <CHeading cprops={{ color: "gray.800" }} size={2} title={c.days} />
              <CText cprops={{ color: "gray.700" }} size={1} title={c.title} />
              <Grid mt={6} rowGap={"1rem"}>
                {c.apr.map((d, j) => <Flex key={j}>
                  <Tag bg="transparent" boxShadow={"lg"} borderRadius={"lg"} key={j}>
                    <CText cprops={{ color: "gray.600", }} size={3} title={d} />
                  </Tag>
                </Flex>)}
              </Grid>
              <Button mt={6}>Stake Now</Button>

            </CCard>)}
        </Grid>

        <CCard
          props={{
            p: 4,
            bg: 'gray.50',
            className: "glass_effect",
            border: "2px",
            borderColor: 'white',
            boxShadow: "sm"
          }}
          type="s">
          <Flex columnGap={"6rem"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <CText size={1} title="My Stakes & Rewards" />
              <CText size={3} title="You have no staked AIX" />
            </Box>
            <Button>Stake</Button>
          </Flex>
        </CCard>
      </Flex>
    </Box>
  </Box>
}


const data = [
  {
    bg: gradientBgs[0],
    days: "30 days",
    title: "ETH Sharing",
    apr: [
      "1.51% APY",
      "1.50% APR",
      "0 AIX/0%"
    ]
  },
  {
    bg: gradientBgs[1],
    days: "60 days",
    title: "ETH Sharing",
    apr: [
      "1.51% APY",
      "1.50% APR",
      "0 AIX/0%"
    ]
  },
  {
    bg: gradientBgs[1],
    days: "90 days",
    title: "ETH Sharing",
    apr: [
      "1.51% APY",
      "1.50% APR",
      "0 AIX/0%"
    ]
  }
]
