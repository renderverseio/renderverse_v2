import MainSection from "./sections/MainSection/MainSection";
import PartnersSection from "./sections/PartnersSection/PartnersSection";
import ProductsSection from "./sections/ProductSection/ProductSection";
import OurMissionSection from "./sections/OurMissionSection/OurMissionSection";
import RoadmapSection from "./sections/RoadmapSection/RoadmapSection";
import GallerySection from "./sections/GallerySection/GallerySection";

import HomeContainer from "@/components/containers/HomeContainer/HomeContainer";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import SubscribeSection from "./sections/SubscribeSection";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer children={
        <>
          <MainSection />
          <PartnersSection />
          <ProductsSection />
        </>
      } />
      <GallerySection />
      <HomeContainer children={
        <>
          {/* <PricingSection /> */}
          <RoadmapSection />
        </>
      } />

      <SubscribeSection />
      <Box py={24} bg="white">
        <HomeContainer children={<OurMissionSection />} />
      </Box>
      <Footer />
    </>
  );
}
