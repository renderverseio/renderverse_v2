import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Container, } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function SvgLine({ alignLeft }) {

  const ref = useRef()
  const container = useRef()
  const { scrollYProgress } = useScroll({ target: ref, container: container })
  const [strokes, setStrokes] = useState({ stroke1: "gray", stroke2: "gray" })
  const [variants, setVariants] = useState({
    opacity: 0,
    y: 100,
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const p = latest * 100
    const min = 44
    const max = 80
    if (p > min && p < max) {
      const percentage = (p / max)
      console.log(percentage * 100)
      if (p > 65 && p < 75) {
        // setStrokes({
        //   stroke1: "black",
        //   stroke2: "pink"
        // })
      }
      if (p > 75 && p < 85) {
        // setStrokes({
        //   stroke1: "black",
        //   stroke2: "pink"
        // })
      }
      if (p > 85 && p < 95) {
        // setStrokes({
        //   stroke1: "black",
        //   stroke2: "pink"
        // })
      }
    }
  })


  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{
          duration: 1,
          ease: "linear",
          type: "keyframes",
          // bounce: 1,
          // stiffness: 840, 
        }}
        // style={{ variants }}
        variants={{
          visible: { opacity: 1, scale: 1, y: 0, x: 0, },
          hidden: { opacity: 0, scale: .99, y: -1, x: -1 }
        }}
      >
        {alignLeft
          ?
          <svg
            width="690" height="408" viewBox="0 0 690 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                transition: "all 1s ease-in-out"
              }}
              id="theMotionPath1"
              d="M0,0 Q50,200 345,204 T690,408"
              stroke={strokes.stroke1}
              stroke-width="5"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-dasharray="40 40"
            ></path>
          </svg>
          :
          <svg style={{ transform: "rotatex(180deg)" }} width="690" height="408" viewBox="0 0 690 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                transition: "all 1s ease-in-out"
              }}
              d="M0,0 Q50,200 345,204 T690,408"
              stroke={strokes.stroke1}
              stroke-width="5"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-dasharray="40 40"
            ></path>
          </svg>
        }
      </motion.div>
    </ Container >
  );
}

