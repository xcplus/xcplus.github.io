import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider defaultTheme='system' attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
}