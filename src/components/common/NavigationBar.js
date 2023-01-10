import { Navbar, Link, Text } from "@nextui-org/react"
import { DarkModeToggle } from "./DarkModeToggle"
import { useMenuContext } from "@/hooks/MenuProvider"
import { Logo } from "./Logo"

import Menus from '@/constants/Menus'

export const NavigationBar = () => {
  const { activeSection, handleSectionChange } = useMenuContext()

  return (
    <Navbar variant="sticky" maxWidth="fluid">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
      >
        <Logo />
        <Text b color="inherit" hideIn="xs">
          ésar Rguez
          </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="highlight-rounded"
      >

        {Menus.map((item, index) => (
          <Navbar.Link key={`${index}`} isActive={activeSection===item} onPress={() => handleSectionChange(item)} href="#">{item}</Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <DarkModeToggle></DarkModeToggle>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {Menus.map((item, index) => (
          <Navbar.CollapseItem
            id={`${index}`}
            key={item}
            isActive={activeSection===item}
          >
            <Link
              color="inherit"
              onPress={() => handleSectionChange(item)}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
