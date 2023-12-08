import { CategoriesProvider } from '@/features/category/contexts/CategoriesContexts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CategoriesProvider>
    <Component {...pageProps} />
  </CategoriesProvider>
  )
}
