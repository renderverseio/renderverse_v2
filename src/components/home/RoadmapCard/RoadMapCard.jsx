import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs2 } from "@/data/home/homeData";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CheckMark from "@/assets/roadmap/checkmark.png";
import InProgress from "@/assets/roadmap/loading.png";
import Target from "@/assets/roadmap/target.png";

export default function RoadmapCard(props) {
  return (
    <Flex
      columnGap={"4rem"}
      rowGap="4rem"
      alignItems="center"
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box my={6} w="100%" display={{ base: "block", lg: "none" }}>
        <RoadmapMileStone {...props} />
      </Box>

      <Box w="100%" display={{ base: "none", lg: "flex" }}>
        {props.alignLeft && <RoadmapMileStone {...props} />}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          style={{
            zIndex: 2,
            width: "100%",
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            type: "spring",
            bounce: 0.5,
            stiffness: 120,
          }}
          variants={{
            visible: {
              scale: 1,
            },
            hidden: { scale: 0.5 },
          }}
        >
          <Flex
            alignItems={"center"}
            h="100%"
            justifyContent={"center"}
            borderRadius="lg"
          >
            <Image
              borderRadius={"lg"}
              objectFit={"contain"}
              objectPosition="center"
              src={props.img}
            />
          </Flex>
        </motion.div>
        {!props.alignLeft && <RoadmapMileStone {...props} />}
      </Box>
    </Flex>
  );
}

function RoadmapMileStone({ phase, title, i }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      style={{
        zIndex: 2,
        width: "100%",
      }}
      transition={{
        delay: 0.1 * i,
        duration: 0.5,
        ease: "linear",
        type: "spring",
        bounce: 0.5,
        stiffness: 120,
      }}
      variants={{
        visible: {
          rotate: 0,
        },
        hidden: { rotate: i % 2 !== 0 ? 25 : -25 },
      }}
    >
      <Box borderRadius="lg" bgImg={gradientBgs2[i]}>
        <Flex w="100%" rowGap={"1rem"} p={6} flexDir={"column"}>
          <CHeading
            cprops={{ color: "white", fontWeight: "bold" }}
            size={2}
            title={title}
          />
          <Divider />
          {phase[0].milestones.map((p, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              style={{ zIndex: 2 }}
              transition={{
                delay: 0.1 * i,
                duration: 0.5,
                ease: "linear",
                type: "spring",
                bounce: 0.5,
                stiffness: 120,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                },
                hidden: { opacity: 0, y: 40 },
              }}
              key={i}
            >
              <Flex
                columnGap={".5rem"}
                alignItems="center"
                justifyContent={"space-between"}
                w="100%"
              >
                <Flex columnGap={".5rem"} alignItems="center">
                  <Image
                    borderRadius={"lg"}
                    background={"white"}
                    p={1}
                    maxW="32px"
                    src={Target}
                  />
                  <CText
                    cprops={{ color: "white", fontWeight: "bold" }}
                    size={3}
                    title={p}
                  />
                </Flex>
                <Box bg="white" p={1} borderRadius="xl">
                  <Image
                    maxW="24px"
                    src={phase[0].isCompleted[i] ? CheckMark : InProgress}
                  />
                </Box>
              </Flex>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
}
