import CText from "@/components/typography/CText/CText";
import CCard from "@/components/custom/CCard/CCard";
import CHeading from "@/components/typography/CHeading/CHeading";

import { useNavigate } from "react-router";
import { StakingImages } from "@/data/dapp/dappData";
import { productsData } from "@/data/dapp/productsData";
import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";

export default function ProductSuiteSection() {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex rowGap={"2rem"} p={8} flexDir={"column"}>
        <CHeading size={1} title={"Welcome to our bots"} />
        <Grid rowGap={"2rem"} columnGap={"2rem"} minH="40rem">
          {productsData.map((c, i) => (
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
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                border: "2px",
                borderColor: "white",
                boxShadow: "sm",
                columnGap: "2rem",
              }}
            >
              <Image maxW="320px" src={StakingImages[i]} />
              <Flex
                py={4}
                px={8}
                flexDir={"column"}
                justifyContent="center"
                rowGap={"1rem"}
              >
                <CText
                  cprops={{ color: "gray.100" }}
                  size={1}
                  title={c.title}
                />
                <CText cprops={{ color: "gray.200" }} size={3} title={c.desc} />
                <Flex>
                  <Button
                    boxShadow={"lg"}
                    size="lg"
                    bgImage={c.btnImg}
                    zIndex={4}
                    onClick={() => navigate(c.link)}
                  >
                    {c.btnText}
                  </Button>
                </Flex>
              </Flex>
            </CCard>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
