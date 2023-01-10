import React from 'react'
import styles from '@/styles/ThreeLayout.module.css'
import { Canvas } from "@react-three/fiber"

// import React from 'react'

const ThreeLayout = ({ children }) => {
  return (
    <div className={styles.scene}>
        <Canvas
            shadows={true}
            className={styles.canvas}
            camera={{
                position: [0, 5, 10],
            }}
        >
            {children}
        </Canvas>
    </div>
  )
}

export default ThreeLayout