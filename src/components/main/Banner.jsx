import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Banner() {
  return (
    <div className='flex flex-col'>
      <Link href={""} className='p-2'>
        <Image 
          src="/main/forum.webp" 
          layout="responsive" 
          width={400} 
          height={200} 
          alt='فروم' 
        />
      </Link>
      <Link href={"/"} className='p-2 hidden md:block'>
        <Image 
          src="/main/assemble.webp" 
          layout="responsive" 
          width={400} 
          height={200} 
          alt='اسمبل' 
        />
      </Link>
    </div>
  )
}
