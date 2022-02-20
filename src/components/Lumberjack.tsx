import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useRive } from "rive-react"
import Block from "./Block"
import Mountain from "./Mountain"

const Lumberjack = ({ domContent, positionY }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { rive, RiveComponent } = useRive({
    src: "/lumberjack.riv",
    autoplay: false,
  })

  useEffect(() => {
    rive && isPlaying ? rive?.play() : rive?.pause()
  }, [isPlaying])

  return (
    <Block bgColor="#571ec1" domContent={domContent} positionY={positionY}>
      <Box pos="absolute" zIndex={2}>
        <RiveComponent
          // rive.play()
          onMouseLeave={() => rive && rive.pause()}
        />

        <Button onClick={() => setIsPlaying(!isPlaying)}>Click Me</Button>
      </Box>
      <Mountain />
    </Block>
  )
}

export default Lumberjack
