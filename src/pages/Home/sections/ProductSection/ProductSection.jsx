import { Box, Grid, } from "@chakra-ui/react";

import { productsData, } from "@/data/home/homeData";

import ProductCard from "@/components/home/ProductCard/ProductCard";

export default function ProductsSection() {
  return (
    <Box py={24}>
      {productsData.map((d, i) => (
        <Grid rowGap={"2rem"} key={i}>
          <ProductCard i={i} alignLeft={i % 2 === 0} {...d} />
        </Grid>
      ))}
    </Box>
  );
}


