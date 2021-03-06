import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Navbar } from "@/components/Navbar"
import Scroll from "@/components/Scroll"
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
        </Suspense>
      </Canvas>
      <Scroll domContent={domContent} />
    </>
  )
}

export default Index
