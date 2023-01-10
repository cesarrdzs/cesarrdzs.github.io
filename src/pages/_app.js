import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/constants/themes'
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function App({ Component, pageProps }) {
  return (<>
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{ light: lightTheme, dark: darkTheme }}
    >
      {/* TODO
          Implement NextSeo
      */}
      <NextUIProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      </NextUIProvider>
    </NextThemesProvider>
  </>
  )

}
