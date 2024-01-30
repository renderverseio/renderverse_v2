import { Box, Grid, } from "@chakra-ui/react";

import EcoSystemCard from "@/components/home/EcoSystemCard/EcoSystemCard";

import { ecoSystemData, } from "@/data/home/homeData";

export default function EcoSystemSection() {
  return (
    <Box py={24}>
      {ecoSystemData.map((d, i) => (
        <Grid rowGap={"2rem"} key={i}>
          <EcoSystemCard i={i} alignLeft={i % 2 === 0} {...d} />
        </Grid>
      ))}
    </Box>
  );
}


