import React from 'react'
import LatestProcessorsSlider from './LatestProcessorsSlider'
export default function LatestProcessors() {
  return (
    <div className='shadow-md rounded-xl p-4 bg-white py-5 container mx-auto'>
        <h3 className='mb-5 font-semibold'>جدیدترین پردازنده ها</h3>
        <LatestProcessorsSlider />
    </div>
  )
}
