import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { useInView } from "react-intersection-observer"
import Section from "./Section"
import Model from "./Model"
import { Box } from "@chakra-ui/react"

const Block = ({
  domContent,
  children,
  bgColor,
  bgImage,
  modelPath,
  positionY,
  scale = 1,
}: any) => {
  const ref: any = useRef()
  const [refItem, inView] = useInView({ threshold: 0 })
  modelPath && useFrame(() => (ref.current.rotation.y -= 0.004))

  useEffect(() => {
    inView && (document.body.style.background = bgColor)
    inView && bgImage && (document.body.style.backgroundImage = bgImage)
  }, [inView])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, -40]}>
        {modelPath && (
          <mesh ref={ref} position={[0, 0, 0]} scale={scale}>
            <Model path={modelPath} />
          </mesh>
        )}
        <Html portal={domContent} fullscreen>
          <Box
            m="0 auto"
            w="100%"
            maxW="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            ref={refItem}
          >
            {children}
          </Box>
        </Html>
      </group>
    </Section>
  )
}

export default Block
