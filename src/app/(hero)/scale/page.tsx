import React from 'react'
import Hero from '@/components/hero'
import imgSrc from '/public/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} alt="Home" content='Welcome to scale' />
  )
}
