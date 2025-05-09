import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function LatestCats() {
  return (
    <div className='shadow-md rounded-xl p-4 bg-white py-5 flex justify-around container mx-auto'>
        <div className='w-full flex justify-center items-center'>
            <Link href={'/category/monitor/'}>
                <Image width={100} height={100} alt='category' src='/latest/display.svg'></Image>
            </Link>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Link href={'/category/keyboard/'}>
                <Image width={100} height={100} alt='category' src='/latest/keyboard.svg'></Image>
            </Link>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Link href={'/category/motherboard/'}>
                <Image width={100} height={100} alt='category' src='/latest/motherboard.svg'></Image>
            </Link>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Link href={'/category/cpu/'}>
                <Image width={100} height={100} alt='category' src='/latest/processor.svg'></Image>
            </Link>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Link href={'/category/gpu/'}>
                <Image width={100} height={100} alt='category' src='/latest/vga.svg'></Image>
            </Link>
        </div>
    </div>
  )
}
