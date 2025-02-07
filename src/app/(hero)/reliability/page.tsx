import React from 'react'
import imgSrc from '/public/reliability.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reliability'
}

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} alt="Home" content='Welcome to reliability' />
  )
}
