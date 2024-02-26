import MainSection from "./sections/MainSection/MainSection";
import PartnersSection from "./sections/PartnersSection/PartnersSection";
import ProductsSection from "./sections/ProductSection/ProductSection";
import GallerySection from "./sections/GallerySection/GallerySection";
import RoadmapSection from "./sections/RoadmapSection/RoadmapSection";
// import SubscribeSection from "./sections/SubscribeSection/SubscribeSection";
import OurMissionSection from "./sections/OurMissionSection/OurMissionSection";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import HomeContainer from "@/components/containers/HomeContainer/HomeContainer";

import { Box } from "@chakra-ui/react";
import ResearchSection from "./sections/ResearchSection/ResearchSection";
import TokenTrendingSection from "./sections/TokenTrendingSection/TokenTrendingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <MainSection />
        <PartnersSection />
        <ProductsSection />
      </HomeContainer>
      <GallerySection />
      <HomeContainer>
        <RoadmapSection />
      </HomeContainer>

      <TokenTrendingSection />
      {/* <SubscribeSection /> */}
      <ResearchSection />

      <Box py={24} bg="white">
        <HomeContainer>
          <OurMissionSection />
        </HomeContainer>
      </Box>

      <Footer />
    </>
  );
}
