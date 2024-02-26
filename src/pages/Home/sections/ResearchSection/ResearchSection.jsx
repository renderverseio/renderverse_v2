import CText from "@/components/typography/CText/CText";
import CHeading from "@/components/typography/CHeading/CHeading";

import { Box, Image, Flex, Grid } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

const data = [
  {
    title: "Video generation models as world simulators",
    date: "Jan 31, 2024January 31, 2024",
    url: "https://images.openai.com/blob/28bcbcb2-563a-432b-bb30-d74f66a087fe/young-tiger.jpg?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/video-generation-models-as-world-simulators",
  },
  {
    title:
      "Building an early warning system for LLM-aided biological threat creation",
    date: "Feb 15, 2024February 15, 2024",
    url: "https://images.openai.com/blob/ec66425e-99ca-4314-9999-70e6010c8162/building-an-early-warning-system-for-llm-aided-biological-threat-creation.jpg?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/building-an-early-warning-system-for-llm-aided-biological-threat-creation",
  },
  {
    title: "Weak To Strong Generalization",
    date: "Dec 14, 2023December 14, 2023",
    url: "https://images.openai.com/blob/3ae4eaf0-e103-445d-8974-12da0a9934c0/weak-to-strong-generalization.jpg?trim=0,345,0,310&width=800",
    link: "https://openai.com/research/weak-to-strong-generalization",
  },
  {
    title: "Practices For Governing Agentic AI Systems",
    date: "Dec 14, 2023",
    url: "https://images.openai.com/blob/dfdeca52-d054-4ce9-aabc-3386f24873d8/practices-for-governing-agentic-ai-systems.jpg?trim=0,0,0,0&width=500&height=500",
    link: "https://openai.com/research/practices-for-governing-agentic-ai-systems",
  },
  {
    title: "DALL·E 3 system card",
    date: "Oct 3, 2023",
    url: "https://images.openai.com/blob/de9e8dc2-a39b-46c9-b7a0-54dd5c56b1df/dall-e-3-system-card.png?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/dall-e-3-system-card",
  },
  {
    title: "GPT-4V(ision) system card",
    date: "Sep 25, 2023",
    url: "https://images.openai.com/blob/96a6dba4-e46c-4f98-b718-915479d1c133/gpt-4vision-system-card.png?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/gpt-4v-system-card",
  },
  {
    title:
      "Confidence-Building Measures for Artificial Intelligence: Workshop proceedings",
    date: "Aug 1, 2023August 1, 2023",
    url: "https://images.openai.com/blob/de9e8dc2-a39b-46c9-b7a0-54dd5c56b1df/dall-e-3-system-card.png?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/confidence-building-measures-for-artificial-intelligence",
  },
  {
    title: "Frontier AI regulation: Managing emerging risks to public safety",
    date: "Aug 1, 2023",
    url: "https://images.openai.com/blob/96a6dba4-e46c-4f98-b718-915479d1c133/gpt-4vision-system-card.png?trim=0,0,0,0&width=800",
    link: "https://openai.com/research/frontier-ai-regulation",
  },
];

export default function ResearchSection() {
  return (
    <Box bg="white" pt={6} pb={12}>
      <Flex py={6} justifyContent="center">
        <CHeading title={`Related research`} size={1} />
      </Flex>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={-60}
        scrollbar={{
          draggable: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
        }}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          990: {
            slidesPerView: 2,
          },
          1366: {
            slidesPerView: 4,
          },
        }}
        style={{
          padding: "4rem 4rem",
        }}
        centeredSlides={true}
      >
        {data.map((row, i) => (
          <SwiperSlide key={i}>
            <Image
              _hover={{
                filter: "contrast(1.5)",
                transform: "scale(.96)",
              }}
              cursor={"pointer"}
              transition={"all 300ms ease-in-out"}
              borderRadius={"lg"}
              boxShadow={"lg"}
              maxW={"320px"}
              src={row.url}
            />
            <Grid maxW="50%">
              <CText size={2} title={row.title} />
              <CText size={3} title={row.date} />
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
