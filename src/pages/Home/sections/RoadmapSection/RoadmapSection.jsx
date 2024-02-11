import { Box, Flex, Grid } from "@chakra-ui/react";

import { roadMapData } from "@/data/home/homeData";

import SvgLine from "@/components/home/SvgLine/SvgLine";
import RoadmapCard from "@/components/home/RoadmapCard/RoadMapCard";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function RoadmapSection() {
  return (
    <Box py={24}>
      <Flex pb={6} justifyContent="center">
        <CHeading title={`Roadmap`} size={1} />
      </Flex>

      {roadMapData.map((d, i) => (
        <Flex flexDir={"column"} w="100%" justifyContent={"center"} key={i}>
          <RoadmapCard
            i={i}
            alignLeft={i % 2 === 0}
            phase={d.phase}
            title={d.title}
          />
          <Box display={{ base: "none", lg: "block" }}>
            {i !== 4 ? <SvgLine alignLeft={i % 2 === 0} /> : null}
          </Box>
        </Flex>
      ))}
    </Box>
  );
}
