import { useEffect } from "react"
import { Box } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Mountain = () => {
  const animateGrass = useAnimation()
  const animateMountains = useAnimation()
  const { ref, inView } = useInView({ threshold: 0 })

  console.log(inView)

  useEffect(() => {
    if (inView) {
      animateGrass.start({
        pathLength: [0, 1],
        opacity: [0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1],
        // stroke: ["none", "#ebae2b"],
        stroke: ["none", "#66d4ff", "#f266ff"],
        strokeWidth: [12, 10, 5, 0],
        transition: { duration: 3 },
        scaleX: [1.2, 1],
      })
      animateMountains.start({
        pathLength: [0, 1],
        opacity: [0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1],
        stroke: ["none", "#21b304"],
        strokeWidth: [12, 10, 5, 0],
        transition: { duration: 3 },
        scaleY: [1.2, 1],
      })
    }
  }, [inView])

  return (
    <Box ref={ref} pos="absolute" h="100vh" w="100%" overflow="hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="inherit"
        height="inherit"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1063")' fill="none">
          <motion.path
            animate={animateGrass}
            d="M 0,251 C 32,219.6 96,88.6 160,94 C 224,99.4 256,275.8 320,278 C 384,280.2 416,107 480,105 C 544,103 576,262.8 640,268 C 704,273.2 736,153.8 800,131 C 864,108.2 896,169.8 960,154 C 1024,138.2 1056,33.8 1120,52 C 1184,70.2 1216,241.2 1280,245 C 1344,248.8 1408,105.8 1440,71L1440 560L0 560z"
            fill="url(#top)"
          ></motion.path>
          <path
            id="walking"
            d="M -607 264 C -65 201 278 284 492 276 C 740 276 887 244 1009 284 C 1195 315 1384 299 1483 288"
          />
          <motion.path
            animate={animateMountains}
            d="M 0,405 C 96,414.2 288,452.8 480,451 C 672,449.2 768,378.2 960,396 C 1152,413.8 1344,511.2 1440,540L1440 560L0 560z"
            mask='url("#SvgjsMask1063")'
            fill="url(#bottom)"
          ></motion.path>
        </g>
        <defs>
          <mask id="SvgjsMask1063">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
          <linearGradient x2="0%" y2="100%" gradientUnits="userSpaceOnUse" id="bottom">
            <stop stopColor="#36ee7d" offset="0"></stop>
            <stop stopColor="rgba(44, 253, 124, 0)" offset="1"></stop>
          </linearGradient>
          <linearGradient x2="0%" y2="100%" gradientUnits="userSpaceOnUse" id="top">
            <stop stopColor="rgba(105, 30, 193, 1)" offset="0"></stop>
            <stop stopColor="rgba(71, 24, 126, 0)" offset="1"></stop>
          </linearGradient>
        </defs>
      </motion.svg>
    </Box>
  )
}

export default Mountain
