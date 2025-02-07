"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
    { name: "Performance", href: "/performance" },
    { name: "Scale", href: "/scale" },
    { name: "Reliability", href: "/reliability" },
]

const accessLink = ['/','/performance','reliability','/scale']

export default function Header() {
  const pathname = usePathname()
//   if(!accessLink.includes(pathname)) return null
  return (
    <div className="absolute w-full z-10">
        <div className="flex justify-between container mx-auto text-white p-8">
        <Link className={["text-3xl","font-bold",pathname === '/' ? 'text-purple-500' : ''].join(' ')} href="/">Home</Link>
        <div className="text-xl space-x-4">
            {
                linkData.map((link) => (
                    <Link key={link.name} className={pathname === link.href ? 'text-purple-500' : ''} href={link.href}>{link.name}</Link>
                ))
            }
        </div>
        </div>
    </div>
  )
}
