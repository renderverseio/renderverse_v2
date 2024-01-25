import { Box } from "@chakra-ui/react";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Main from "@/components/home/Main";
import Roadmap from "@/components/home/Roadmap";
import EcoSystem from "@/components/home/EcoSystem";
import OurMission from "@/components/home/OurMission";
import SlideSection from "@/components/home/SlideSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        p={{ base: 4, md: 8 }}
        maxW={{ base: "100%", md: "90%", lg: "85%", xl: "80%", "2xl": "65%" }}
        mx="auto"
      >
        <Main />
        <Roadmap />
        <EcoSystem />
      </Box>
      <SlideSection />
      <OurMission />
      <Footer />
    </>
  );
}
