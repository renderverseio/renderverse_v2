import { motion } from "framer-motion";
import { gradientBgs } from "@/data/home/homeData";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";

export default function ProductCard({
  parentAnimations,
  childAnimations,
  alignLeft,
  title,
  note1,
  note2,
  i,
  img,
  p,
}) {
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
          w={{ base: "100%" }}
          p={6}
          borderRadius="lg"
          bg={gradientBgs[i].bg}
          bgImg={gradientBgs[i].bgImg}
        >
          <Box
            w="50%"
            flexDir={"row"}
            columnGap={"1rem"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <MotionDiv
              hidden={childAnimations.hidden}
              visible={childAnimations.visible}
            >
              <Image p={8} bg="transparent" borderRadius={"lg"} src={img} />
            </MotionDiv>
          </Box>
        </Box>
      </Box>

      {alignLeft && (
        <Box
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          justifyContent="center"
          p={p}
          pos={"relative"}
        >
          <Box
            display={"flex"}
            alignItems="stretch"
            minH="100%"
            minW={"100%"}
            zIndex={3}
            pos={"absolute"}
          >
            <MotionDiv
              visible={parentAnimations.visible}
              hidden={parentAnimations.hidden}
            >
              <Box
                bg={gradientBgs[i].bg}
                bgImg={gradientBgs[i].bgImg}
                borderRadius="lg"
                zIndex={1}
                minW="24rem"
                w="100%"
                minH="100%"
                fontSize={1}
              >
                x
              </Box>
            </MotionDiv>
          </Box>

          <Box zIndex={4}>
            <MotionDiv
              hidden={childAnimations.hidden}
              visible={childAnimations.visible}
            >
              <Image
                maxW={{ base: "280px", lg: "330px" }}
                bg="transparent"
                borderRadius={"lg"}
                src={img}
              />
            </MotionDiv>
          </Box>
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
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          justifyContent="center"
          p={p}
          pos={"relative"}
        >
          <Box
            display={"flex"}
            alignItems="stretch"
            minH="100%"
            minW={"100%"}
            zIndex={3}
            pos={"absolute"}
          >
            <MotionDiv
              visible={parentAnimations.visible}
              hidden={parentAnimations.hidden}
            >
              <Box
                bg={gradientBgs[i].bg}
                bgImg={gradientBgs[i].bgImg}
                borderRadius="lg"
                zIndex={1}
                minW="24rem"
                w="100%"
                minH="100%"
                fontSize={1}
              >
                x
              </Box>
            </MotionDiv>
          </Box>

          <Box zIndex={4}>
            <MotionDiv
              hidden={childAnimations.hidden}
              visible={childAnimations.visible}
            >
              <Image
                maxW={{ base: "280px", lg: "330px" }}
                bg="transparent"
                borderRadius={"lg"}
                src={img}
              />
            </MotionDiv>
          </Box>
        </Box>
      )}
    </Flex>
  );
}

function MotionDiv({ children, visible, hidden }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      style={{ zIndex: 2 }}
      transition={{
        duration: 0.3,
        ease: "linear",
        type: "spring",
        bounce: 0.1,
        stiffness: 120,
      }}
      variants={{
        visible,
        hidden: hidden,
      }}
    >
      {children}
    </motion.div>
  );
}
