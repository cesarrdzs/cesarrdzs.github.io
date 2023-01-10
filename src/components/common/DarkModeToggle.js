'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { Button, useTheme } from '@nextui-org/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const DarkModeToggle = () => {
    const { setTheme } = useNextTheme()
    const { isDark, type } = useTheme()

    return (
        <>
            <Button
                light
                auto
                onPress={() => setTheme(isDark ? 'light' : 'dark')}
                icon={isDark ? <FaSun /> : <FaMoon />}
            />
        </>
    )
}
