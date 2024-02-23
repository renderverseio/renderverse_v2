import CCard from "@/components/custom/CCard/CCard";
import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

import { Box, Button, Flex, Grid, Tag } from "@chakra-ui/react";

export default function StakingSection() {
  return (
    <Box>
      <Box>
        <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
          <CHeading size={1} title={"Staking"} />

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
                  minH: "30rem",
                  p: 4,
                  className: "glass_effect",
                  border: "2px",
                  borderColor: "white",
                  boxShadow: "sm",
                  display: "grid",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgImg: c.bgImg,
                }}
              >
                <Box>
                  <CHeading
                    cprops={{ color: "gray.100" }}
                    size={2}
                    title={c.days}
                  />
                  <CText
                    cprops={{ color: "gray.200" }}
                    size={1}
                    title={c.title}
                  />
                </Box>
                <Grid mt={6} rowGap={"1rem"}>
                  {c.apr.map((d, j) => (
                    <Flex key={j}>
                      <Tag
                        bg={"rgba(0,0,0,0.4)"}
                        border="1px"
                        borderColor={"white"}
                        boxShadow={"dark-lg"}
                        borderRadius={"md"}
                        key={j}
                      >
                        <CText
                          cprops={{ color: "white", fontWeight: "500" }}
                          size={3}
                          title={d}
                        />
                      </Tag>
                    </Flex>
                  ))}
                </Grid>
                <Button
                  transition="all 300ms ease-in-out"
                  color="black"
                  bg="white"
                  boxShadow={"dark-lg"}
                  mt={6}
                  variant="unstyled"
                  px={4}
                  border="1px"
                  borderColor={"white"}
                >
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
    bgImg: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% );`,
    btnImg:
      "linear-gradient(to right, #95bdff, #68ceff, #20deff, #00edfe, #1ff8e5)",
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
    bgImg: `linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )`,
  },
  {
    days: "90 days",
    title: "ETH Sharing",
    apr: ["1.51% APY", "1.50% APR", "$RDAI/0%"],
    bgImg: `linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );`,
    btnImg:
      "linear-gradient(to right bottom, #1779ff, #008aff, #009aff, #00a9ff, #16b6fe);",
  },
];
