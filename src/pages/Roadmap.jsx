import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export default function Roadmap() {
  return (
    <Box py={24}>
      {data.map((d, i) => (
        <Grid key={i}>
          <Roll i={i} alignLeft={i % 2 === 0} {...d} />
          {i !== 3 ? <Lines alignLeft={i % 2 === 0} /> : null}
        </Grid>
      ))}
    </Box>
  );
}

const data = [
  {
    title: `Create next-level presentations`,
    note1: `Say goodbye to boring presentations created with PowerPoint or Keynote.`,
    note2: `👋 snappify enables you to create stunning presentations, with first-class support for code snippets.`,
    link: ``,
    desc: `💡 Share interactive slides so your viewers can easily copy code snippets and interact with links.`,
  },
  {
    title: `Create next-level presentations`,
    note1: `Say goodbye to boring presentations created with PowerPoint or Keynote.`,
    note2: `👋 snappify enables you to create stunning presentations, with first-class support for code snippets.`,
    link: ``,
    desc: `💡 Share interactive slides so your viewers can easily copy code snippets and interact with links.`,
  },
  {
    title: `Create next-level presentations`,
    note1: `Say goodbye to boring presentations created with PowerPoint or Keynote.`,
    note2: `👋 snappify enables you to create stunning presentations, with first-class support for code snippets.`,
    link: ``,
    desc: `💡 Share interactive slides so your viewers can easily copy code snippets and interact with links.`,
  },
  {
    title: `Create next-level presentations`,
    note1: `Say goodbye to boring presentations created with PowerPoint or Keynote.`,
    note2: `👋 snappify enables you to create stunning presentations, with first-class support for code snippets.`,
    link: ``,
    desc: `💡 Share interactive slides so your viewers can easily copy code snippets and interact with links.`,
  },
];

// eslint-disable-next-line react/prop-types
function Lines({ alignLeft }) {
  const d = alignLeft ? `M100,0 v180 h760 v180` : `M100,0 v180 h760 v180`;
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      transform={alignLeft ? `` : `rotateX(180deg)`}
      w="100%"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="360"
        className="stroke-1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        color="#000"
      >
        <g>
          <path d={d} className="path_square" id="theMotionPath"></path>

          <circle cx="0" cy="0" r="20" className="c_circle">
            <animateMotion
              viewTarget={""}
              className="square"
              dur="4s"
              begin="0s"
              fill="freeze"
              repeatCount="indefinite"
            >
              <mpath
                autoReverse={"true"}
                from={100}
                to={0}
                xlinkHref="#theMotionPath"
              ></mpath>
            </animateMotion>
          </circle>
        </g>
      </svg>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function Roll({ alignLeft, title, note1, note2, desc, i }) {
  return (
    <Flex
      columnGap={"1rem"}
      rowGap="2rem"
      alignItems="center"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box px={4} display={{ base: "block", md: "none" }}>
        <Box
          w={{ base: "100%", md: "50%" }}
          minH="40vh"
          borderRadius="lg"
          bg={colors[i].bg}
          bgImg={colors[i].bgImg}
        ></Box>
      </Box>

      {alignLeft ? (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "block" }}
          minH="40vh"
          bg={colors[i].bg}
          bgImg={colors[i].bgImg}
          borderRadius="lg"
        ></Box>
      ) : null}
      <Flex rowGap={"1rem"} p={6} flexDir={"column"}>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
          {title}
        </Text>
        <Text>{note1}</Text>
        <Text>{note2}</Text>
        <Text fontWeight={"bold"} textDecor={"underline"}>
          Learn more →
        </Text>
        <Box borderRadius={"md"} p={3} bg="orange.100">
          <Text>{desc}</Text>
        </Box>
      </Flex>

      {!alignLeft ? (
        <Box
          w={{ base: "100%", md: "50%" }}
          display={{ base: "none", md: "block" }}
          minH="40vh"
          bg={colors[i].bg}
          bgImg={colors[i].bgImg}
          borderRadius="lg"
        ></Box>
      ) : null}
    </Flex>
  );
}

const colors = [
  {
    bg: "#4158D0",
    bgImg: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
  {
    bg: "#0093E9",
    bgImg: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    bg: "#8EC5FC",
    bgImg: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
  {
    bg: "#FBAB7E",
    bgImg: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
];
