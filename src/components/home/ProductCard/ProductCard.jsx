import { motion } from 'framer-motion'
import { gradientBgs } from "@/data/home/homeData";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CHeading from '@/components/typography/CHeading/CHeading';
import CText from '@/components/typography/CText/CText';

export default function ProductCard({ alignLeft, title, note1, note2, i, img }) {


  return (
    <Flex
      my={12}
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
          w={{ base: "100%", }}
          p={6}
          borderRadius="lg"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
        >
          <Box w="50%" flexDir={"row"} columnGap={"1rem"} display={"flex"} justifyContent={"space-evenly"} >
            <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image p={8} bg="transparent" borderRadius={"lg"} src={img} />
            </MotionDiv>
          </Box>
        </Box>
      </Box>

      {alignLeft && (
        <Box
          w={{ base: "100%", }}
          display={{ base: "none", md: "grid" }}
          rowGap={"2rem"}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          p={12}
        >
          <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
            <Image bg="transparent" borderRadius={"lg"} src={img} />
          </MotionDiv>
        </Box>
      )}

      <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
        <CHeading size={2} title={title} />
        <CText size={2} title={note1} />
        <CText size={2} title={note2} />
        <Text fontWeight={"bold"} textDecor={"underline"}>
          Learn more →
        </Text>
      </Flex>

      {!alignLeft && (
        <Box
          w={{ base: "100%", }}
          display={{ base: "none", md: "grid" }}
          rowGap={"2rem"}
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
          borderRadius="lg"
          p={12}
        >
          <Box flexDir={"row"} columnGap={"1rem"} display={"flex"} justifyContent={"space-evenly"} >
            <MotionDiv hidden={{ opacity: 0, y: -120, scale: .95 }} visible={{ opacity: 1, y: 0, scale: 1 }}>
              <Image bg="transparent" borderRadius={"lg"} src={img} />
            </MotionDiv>
          </Box>
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


