import { Box, Flex, Grid } from "@chakra-ui/react";

import { productsData } from "@/data/home/homeData";

import ProductCard from "@/components/home/ProductCard/ProductCard";
import CHeading from "@/components/typography/CHeading/CHeading";

export default function ProductsSection() {
  return (
    <Box py={32}>
      <Flex py={6} justifyContent="center">
        <CHeading title={`Products`} size={1} />
      </Flex>
      {productsData.map((d, i) => (
        <Grid justifyContent={"center"} key={i}>
          <ProductCard i={i} alignLeft={i % 2 === 0} {...d} />
        </Grid>
      ))}
    </Box>
  );
}
