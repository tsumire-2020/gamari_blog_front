import { CategoriesProvider } from '@/features/category/contexts/CategoriesContexts'
import { AuthProvider } from '@/features/user/contexts/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <Component {...pageProps} />
      </CategoriesProvider>
    </AuthProvider>
  )
}
