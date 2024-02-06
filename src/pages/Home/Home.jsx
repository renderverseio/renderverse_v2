import MainSection from "./sections/MainSection/MainSection";
import PartnersSection from "./sections/PartnersSection/PartnersSection";
import ProductsSection from "./sections/ProductSection/ProductSection";
import OurMissionSection from "./sections/OurMissionSection/OurMissionSection";
import PricingSection from "./sections/PricingSection/PricingSection";
import HightLightSection from "./sections/HighLightSection/HighLightSection";
import RoadmapSection from "./sections/RoadmapSection/RoadmapSection";

import HomeContainer from "@/components/containers/HomeContainer/HomeContainer";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";


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
      <HightLightSection />
      <HomeContainer children={
        <>
          <PricingSection />
          <RoadmapSection />
        </>
      } />
      <OurMissionSection />
      <Footer />
    </>
  );
}
