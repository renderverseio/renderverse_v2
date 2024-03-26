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
      <TokenTrendingSection />
      <HomeContainer>
        <RoadmapSection />
      </HomeContainer>

      {/* <SubscribeSection /> */}
      <ResearchSection />
      <Box position={"relative"}>
      <Box
        backgroundPosition={"center"}
        backgroundSize="cotain"
        position={"fixed"}
        top="0"
        zIndex={1000}
      >
        <Box style={{ backdropFilter: "blur(11px)" }}>
        </Box>
      </Box>
      <Box
        display={{ base: "none", lg: "flex" }}
        zIndex={1000}
        position={"fixed"}
        top="40%"
        my="auto"
        right="1rem"
      >
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
          bg="#0e063d"
          boxShadow={`0px 0px 2px #4609C3`}
          borderRadius="3xl"
          py={1}
        >
          {socials.map((s, i) => (
            <Box
              key={i}
              transition={"all 200ms ease-in"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <a rel="noopener noreferrer" href={s.url} target="_blank">
                <img style={{ maxWidth: "60px" }} src={s.icon} alt="" />
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
      <Footer />
    </>
  );
}

const socials = [
  {
    url: "https://twitter.com/AxleGames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp",
  },
  {
    url: "https://medium.com/@axlegames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp",
  },
  {
    url: "https://instagram.com/axlegames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp",
  },
  {
    url: "https://t.me/axlegames_en",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp",
  },
];
