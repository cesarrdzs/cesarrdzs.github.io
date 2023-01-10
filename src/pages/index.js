'use client'

import { Container, Row } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import { useMenuContext } from '@/hooks/MenuProvider'


const Wrapper = dynamic(() => import('@/components/home/Wrapper'), { ssr: false })
const Name = dynamic(() => import('@/components/home/Name'), { ssr: false })
const About = dynamic(() => import('@/components/home/About'), { ssr: false })
const Portfolio = dynamic(() => import('@/components/home/Portfolio'), { ssr: false })
const News = dynamic(() => import('@/components/home/News'), { ssr: false })
const Contact = dynamic(() => import('@/components/home/Contact'), { ssr: false })

export default function Home() {
  const { activeSection } = useMenuContext()

  let contentSelected = (<></>)

  switch (activeSection) {
    case 'Home':
      contentSelected = (<Wrapper><Name /></Wrapper>)
      break
    case 'About':
      contentSelected = (<Wrapper><About /></Wrapper>)
      break
    case 'Portfolio':
      contentSelected = (<Wrapper><Portfolio /></Wrapper>)
      break
    case 'News':
        contentSelected = (<Wrapper><News /></Wrapper>)
        break
    case 'Contact':
        contentSelected = (<Wrapper><Contact /></Wrapper>)
        break
      default:
        break
  }


  return contentSelected
}
