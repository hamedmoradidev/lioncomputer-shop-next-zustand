import React from 'react'
import Link from 'next/link'
export default function Nav() {
  return (
    <div className='w-full flex justify-between items-center font-semibold'>
        <ul className='gap-7 hidden md:flex'>
            <li>
              <Link href={'/category/laptop/'}>لپ تاپ</Link>
            </li>
                        <li>
              <Link href={'/category/motherboard/'}>مادربورد</Link>
            </li>
            <li>
              <Link href={'/category/cpu/'}>پردازنده</Link>
            </li>
            <li>
              <Link href={'/category/gpu/'}>کارت گرافیک</Link>
            </li>
            <li>
              <Link href={'/category/monitor/'}>مانیتور</Link>
            </li>
            <li>
              <Link href={'/category/ram/'}>رم</Link>
            </li>
            <li>
              <Link href={'/category/headphone/'}>هدفون</Link>
            </li>
            <li>
              <Link href={'/category/case/'}>کیس</Link>
            </li>
                     <li>
              <Link href={'/category/mouse/'}>ماوس</Link>
            </li>         <li>
              <Link href={'/category/keyboard/'}>کیبورد</Link>
            </li>
        </ul>
        <ul className='flex justify-between items-center gap-7'>
            <li>
              <Link href={'/promotion/'}>فروش ویژه</Link>
            </li>
            <li>
            <Link href={'/suggested/'}>محصولات پیشنهادی</Link>
            </li>
        </ul>
    </div>
  )
}
