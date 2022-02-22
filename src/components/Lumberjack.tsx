import { gsap } from "gsap/dist/gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import { Box } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import { useRive } from "rive-react"
import { useInView } from "react-intersection-observer"
import Block from "./Block"
import Mountain from "./Mountain"
import { UseResponsiveCheck } from "@/hooks/useResponsiveCheck"
gsap.registerPlugin(MotionPathPlugin)

const Lumberjack = ({ domContent, positionY }) => {
  const lumberjackRef = useRef()
  const { ref, inView } = useInView({ threshold: 0 })
  const { RiveComponent } = useRive({ src: "/lumberjack.riv", autoplay: true })

  useEffect(() => {
    inView &&
      gsap.to(lumberjackRef.current, {
        duration: 15,
        repeat: 5,
        ease: "power1.inOut",
        motionPath: {
          path: "#walking",
          autoRotate: true,
        },
      })
  }, [inView])

  return (
    <Block bgColor="#571ec1" domContent={domContent} positionY={positionY}>
      <Box pos="absolute" ref={lumberjackRef} zIndex={2}>
        <Box ref={ref} />
        <RiveComponent />
      </Box>
      <Mountain />
    </Block>
  )
}

export default Lumberjack
