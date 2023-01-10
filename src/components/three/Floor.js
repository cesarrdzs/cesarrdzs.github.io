import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true} >
      <boxGeometry args={[10, 0.4, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;
