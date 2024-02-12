import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Mission from "@/assets/ourmission.png";
import { FaRegDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RoadmapCard(props) {
  return (
    <Flex
      columnGap={"2rem"}
      rowGap="4rem"
      alignItems="center"
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w="100%" display={{ base: "block", lg: "none" }}>
        <RoadmapMileStone {...props} />
      </Box>
      {props.alignLeft && (
        <RoadmapMileStone display={{ base: "none", lg: "flex" }} {...props} />
      )}
      <Flex display={{ base: "none", lg: "flex" }}>
        <Image maxW={"330px"} src={Mission} />
      </Flex>
      {!props.alignLeft && (
        <RoadmapMileStone display={{ base: "none", lg: "flex" }} {...props} />
      )}
    </Flex>
  );
}

function RoadmapMileStone({ phase, title, i, display }) {
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
      <Box
        borderRadius="lg"
        display={display}
        bg={gradientBgs[i].bg}
        bgImg={gradientBgs[i].bgImg}
      >
        <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
          <CHeading size={2} title={title} />
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
              <Flex columnGap={".5rem"} alignItems="center">
                <FaRegDotCircle />
                <CText size={3} title={p} />
              </Flex>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </motion.div>
  );
}
