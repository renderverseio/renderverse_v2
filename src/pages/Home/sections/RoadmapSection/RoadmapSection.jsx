
import { Box, Grid, } from "@chakra-ui/react";

import { ecoSystemData } from "@/data/home/homeData";

import SvgLine from "@/components/home/SvgLine/SvgLine";
import RoadmapCard from "@/components/home/RoadmapCard/RoadMapCard";

export default function RoadmapSection() {
  return (
    <Box py={24}>
      {ecoSystemData.map((d, i) => (
        <Grid key={i}>
          <RoadmapCard i={i} alignLeft={i % 2 === 0} {...d} />
          <Box display={{ base: "none", lg: "block" }}>
            {i !== 3 ? <SvgLine alignLeft={i % 2 === 0} /> : null}
          </Box>
        </Grid>
      ))}
    </Box>
  );
}


