import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Dodecahedron } from "@react-three/drei"

function Figure(props) {
    const figureRef = useRef()

    useFrame((state, delta) => {
        figureRef.current.rotation.x = figureRef.current.rotation.y += 0.01
    })

  return (
    <Dodecahedron args={[5, 1, 6]} ref={figureRef} >
      <meshNormalMaterial wireframe={true}/>
    </Dodecahedron>
  )
}
export default Figure
