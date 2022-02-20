import { useGLTF } from "@react-three/drei"

const Model = ({ path }) => {
  const gltf = useGLTF(path, true) // maybe don't need true?
  return <primitive object={gltf.scene} dispose={null} />
}

export default Model
