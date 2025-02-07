import React from 'react'
import homeSrc from '/public/home.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

// 首页 / 这种应该是只会找page.tsx
export default function Page() {
  return (
    <Hero imgUrl={homeSrc} alt="Home" content='Welcome to out website' />
  )
}
