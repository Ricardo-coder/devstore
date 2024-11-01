import { Header } from '@/components/header'
import { type ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
