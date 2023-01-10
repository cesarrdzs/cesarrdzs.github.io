import { createContext, useContext, useState  } from 'react'

const MenuContext = createContext()

export function MenuProvider ({ children }) {
    const [activeSection, setActiveSection ] = useState('Home')

  const handleSectionChange = (selectedSection) => {
    setActiveSection(selectedSection)
  }

  return (
    <MenuContext.Provider value={{ activeSection, handleSectionChange }}>
        { children }
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => { return useContext(MenuContext) }