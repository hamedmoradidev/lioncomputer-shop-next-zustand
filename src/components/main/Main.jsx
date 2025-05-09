import React from 'react'
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import('./Slider'), { ssr: false})
import Banner from './Banner'
export default function Main() {
  return (
    <div className='bg-backGround'>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto p-4">
  <div className="md:col-span-4 h-[400px]">
    <Slider />
  </div>
  <div className="md:col-span-1 h-[400px]">
    <Banner />
  </div>
</div>
    </div>
  )
}
