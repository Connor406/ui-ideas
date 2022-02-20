import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Text } from "@chakra-ui/react"
import { Navbar } from "@/components/Navbar"
import Rive from "rive-react"
import Scroll from "@/components/Scroll"
import Block from "@/components/Block"
import Lights from "@/components/Lights"
import Landing from "@/components/Blocks/Landing"
import Lumberjack from "@/components/Lumberjack"

const Index = () => {
  const domContent = useRef()

  return (
    <>
      <Navbar />
      <Canvas style={{ height: "100vh" }} camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <Landing domContent={domContent} positionY={250} />
          <Lumberjack domContent={domContent} positionY={0} />
          <Block
            bgColor="#636567"
            domContent={domContent}
            // modelPath="/safety_pin/scene.gltf"
            positionY={-250}
          >
            <Text fontSize="10rem" textAlign="center" width="100%" margin="0 auto" color="#fff">
              Gray
            </Text>
          </Block>
        </Suspense>
      </Canvas>
      <Scroll domContent={domContent} />
    </>
  )
}

export default Index
