import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import CartBadge from './CartBadge'
import { User } from 'lucide-react'
export default function Header() {
  return (
    <div className='flex flex-wrap container mx-auto h-32 px-5'>
    <div className='w-full flex justify-between'>
      <Link className='flex justify-center items-center' href={'/'}>
      <Image 
        src="/shared/header/logo.svg"
        alt="لوگو" 
        width={200} 
        height={200} 
      />
      </Link>
      <input type="text" />
      <div className='flex items-center justify-center gap-7'>
        <div className='text-[12px] font-semibold'>
            <p>با ما تماس بگیرید</p>
            <Link
                href="tel:+989331029595"
            >
                0933-102-9595</Link>
        </div>
 
          <CartBadge />
        <Link
            href="tel:+989331029595"
            className='rounded-full bg-button-bg w-9 h-9 flex justify-center items-center'
        >
          <User size={18} color="green" />
        </Link>
      </div>
    </div>
    <Nav />
    </div>
  )
}
