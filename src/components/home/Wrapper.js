import React from 'react'
import { Container, Row } from '@nextui-org/react'
import ThreeLayout from '@/components/layouts/ThreeLayout'
import Figure from '@/components/three/Figure'

const Wrapper = ({ children }) => {
  return (
    <Container display='flex' css={{ height: "80vh" }}>
          <Row justify='center' align='center'>
            <ThreeLayout>
              <Figure />
            </ThreeLayout>
            <div style={{ display: 'inherit', 'z-index': '1' }}>
              { children }
            </div>
          </Row>
        </Container>
  )
}

export default Wrapper