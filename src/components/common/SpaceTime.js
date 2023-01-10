'use client'

import styles from '@/styles/SpaceTime.module.css'
import { Canvas } from "@react-three/fiber"
import Box from '@/components/three/Box'

import React, { Suspense } from 'react'

const SpaceTime = () => {
    return (
        <div className={styles.scene}>
            <Canvas
                shadows={true}
                className={styles.canvas}
                camera={{
                    position: [0, 5, 10],
                }}
            >
                <Suspense fallback={null}>
                    <Box  position={[0, 3, 0]} />
                </Suspense>

            </Canvas>
        </div>
      )
}

export default SpaceTime