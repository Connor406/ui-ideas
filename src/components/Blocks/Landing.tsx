import Block from "../Block"
import { Text } from "@chakra-ui/react"

interface Props {
  domContent: any
  positionY: number
}

function Landing({ domContent, positionY }: Props) {
  return (
    <Block
      bgColor="#af1414"
      domContent={domContent}
      modelPath="/safety_pin/scene.gltf"
      positionY={positionY}
      scale={1.6}
    >
      <Text fontSize="10rem" textAlign="center" width="100%" margin="0 auto" color="#fff">
        Safety first.
      </Text>
    </Block>
  )
}

export default Landing
