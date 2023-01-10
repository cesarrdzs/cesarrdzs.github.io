import React, { useRef } from "react"
import { useLoader, useFrame } from "@react-three/fiber"
import { Dodecahedron } from "@react-three/drei"
import { TextureLoader } from "three"
import { gsap } from "@/lib/gasp"

function Box(props) {
    const boxRef = useRef()
    const texture = useLoader(TextureLoader, "/tzalam.jpg")

    useFrame((state, delta) => {
      boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01

      // boxRef.current.rotation.x += delta
      // boxRef.current.rotation.y += delta
    })

  return (
    <Dodecahedron args={[2, 1, 6]} ref={boxRef} >
      <meshNormalMaterial wireframe={true}/>
    </Dodecahedron>


    // <mesh {...props} ref={boxRef}>
    //   <boxGeometry />
    //   <meshPhysicalMaterial map={texture} color={"white"} />
    // </mesh>
  )
}
export default Box;
