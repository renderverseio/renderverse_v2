import { Box } from "@chakra-ui/react";

import Footer from "./footer";
import Navbar from "../components/Navbar";

import Index from "./Index";
import Roadmap from "./Roadmap";
import EcoSystem from "./EcoSystem";
import OurMission from "./OurMission";
import SlideSection from "./SlideSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        p={{ base: 4, md: 8 }}
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "65%" }}
        mx="auto"
      >
        <Index />
        <Roadmap />
        <EcoSystem />
      </Box>
      <SlideSection />
      <OurMission />
      <Footer />
    </>
  );
}
