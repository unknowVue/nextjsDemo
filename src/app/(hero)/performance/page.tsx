import React from 'react'
import Hero from '@/components/hero'
import imgSrc from '/public/performance.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Performance'
}

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} alt="Home" content='Welcome to performance' />
  )
}
