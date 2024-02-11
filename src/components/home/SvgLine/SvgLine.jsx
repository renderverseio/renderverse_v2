import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { useState } from "react";

export default function SvgLine({ alignLeft }) {
  const [strokes, setStrokes] = useState({ stroke1: "gray", stroke2: "gray" });

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
          visible: { opacity: 1, scale: 1, y: 0, x: 0 },
          hidden: { opacity: 0, scale: 0.99, y: -1, x: -1 },
        }}
      >
        {alignLeft ? (
          <svg
            width="690"
            height="408"
            viewBox="0 0 690 408"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                transition: "all 1s ease-in-out",
              }}
              id="theMotionPath1"
              d="M0,0 Q50,200 345,204 T690,408"
              stroke={strokes.stroke1}
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="40 40"
            ></path>
          </svg>
        ) : (
          <svg
            style={{ transform: "rotatex(180deg)" }}
            width="690"
            height="408"
            viewBox="0 0 690 408"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                transition: "all 1s ease-in-out",
              }}
              d="M0,0 Q50,200 345,204 T690,408"
              stroke={strokes.stroke1}
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="40 40"
            ></path>
          </svg>
        )}
      </motion.div>
    </Container>
  );
}
