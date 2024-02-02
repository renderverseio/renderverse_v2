
import Eco from '@/assets/eco.jpg'
import Eco2 from '@/assets/eco2.jpg'

import { motion } from 'framer-motion'
import { gradientBgs } from "@/data/home/homeData";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { chiliz } from 'viem/chains';
import CHeading from '@/components/typography/CHeading/CHeading';

export default function EcoSystemCard({ alignLeft, title, note1, note2, i }) {


  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      rowGap="1rem"
      columnGap="1rem"
      alignItems="center"
      py={6}
    >
      <Box px={4} display={{ base: "block", md: "none" }}>
        <Box
          display={"grid"}
          rowGap={"2rem"}
          w={{ base: "100%", md: "50%" }}
          p={6}
          borderRadius="lg"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
        >
          <Box flexDir={"row"} columnGap={"1rem"} display={"flex"} justifyContent={"space-evenly"} >
            <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco} />
            </MotionDiv>
            <MotionDiv hidden={{ opacity: 0, y: 120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco2} />
            </MotionDiv>
          </Box>
          <MotionDiv hidden={{ opacity: 0, y: 120, }} visible={{ y: 0, opacity: 1 }}>
            <Box bg="white" borderRadius={"lg"} p={2}>
              <CHeading
                title={"Lorem minim sint cillum sint consectetur cupidatat."}
                size={3} />
            </Box>
          </MotionDiv>
        </Box>
      </Box>

      {alignLeft && (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "grid" }}
          rowGap={"2rem"}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          p={6}
        >
          <Box flexDir={"row"} columnGap={"1rem"} display={"flex"} justifyContent={"space-evenly"} >
            <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco} />
            </MotionDiv>
            <MotionDiv hidden={{ opacity: 0, y: 120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco2} />
            </MotionDiv>
          </Box>
          <MotionDiv hidden={{ opacity: 0, y: 120, }} visible={{ y: 0, opacity: 1 }}>
            <Box bg="white" borderRadius={"lg"} p={2}>
              <CHeading
                title={"Lorem minim sint cillum sint consectetur cupidatat."}
                size={3} />
            </Box>
          </MotionDiv>
        </Box>
      )}

      <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
          {title}
        </Text>
        <Text>{note1}</Text>
        <Text>{note2}</Text>
        <Text fontWeight={"bold"} textDecor={"underline"}>
          Learn more →
        </Text>
      </Flex>

      {!alignLeft && (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "grid" }}
          rowGap={"2rem"}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          p={6}
        >
          <Box flexDir={"row"} columnGap={"1rem"} display={"flex"} justifyContent={"space-evenly"} >
            <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco2} />
            </MotionDiv>
            <MotionDiv hidden={{ opacity: 0, y: 120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={Eco} />
            </MotionDiv>
          </Box>
          <MotionDiv hidden={{ opacity: 0, y: 120, }} visible={{ y: 0, opacity: 1 }}>
            <Box bg="white" borderRadius={"lg"} p={2}>
              <CHeading
                title={"Lorem minim sint cillum sint consectetur cupidatat."}
                size={3} />
            </Box>
          </MotionDiv>

        </Box>
      )}
    </Flex>
  );
}


function MotionDiv({ children, visible, hidden }) {
  return <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    transition={{
      duration: .3,
      ease: "linear",
      type: "spring",
      bounce: .33,
      stiffness: 120,
    }}
    variants={{
      visible,
      hidden: hidden
    }}
  >
    {children}
  </motion.div>

}


