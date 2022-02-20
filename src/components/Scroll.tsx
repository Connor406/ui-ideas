import { Box } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import State from "./State"

const Scroll = ({ domContent }) => {
  const scrollArea = useRef()
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  // @ts-ignore TODO: fix me
  const onScroll = e => (State.top.current = e.target.scrollTop)

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      overflow={"auto"}
      ref={scrollArea}
      onScroll={onScroll}
    >
      <Box position="sticky" top={0} ref={domContent}></Box>
      <Box h={`${State.sections * 100}vh`}></Box>
    </Box>
  )
}

export default Scroll
