'use client'

import React from 'react'
import { NavigationBar } from '@/components/common/NavigationBar'
import { MenuProvider } from '@/hooks/MenuProvider'


export const MainLayout = ({ children }) => {
    return (
        <>
            <MenuProvider>
                <NavigationBar />
                {children}
            </MenuProvider>
        </>
    )
}