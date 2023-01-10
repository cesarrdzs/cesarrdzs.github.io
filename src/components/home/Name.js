import React from 'react'
import { Text, Spacer } from '@nextui-org/react'

const Name = () => {
  return (
   <>
     <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $green600 50%",
      }}
      weight="bold"
    >
      César
    </Text>
    <Spacer x={1}/>

    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $green600 -20%, $blue600 100%",
      }}
      weight="bold"
    >
      Rodríguez
    </Text>
  </>
  )
}

export default Name