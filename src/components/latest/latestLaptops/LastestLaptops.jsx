import React from 'react'
import LastestLaptopsSlider from './LatestLaptopsSlider'
export default function LatestLaptops() {
  return (
    <div className='shadow-md rounded-xl p-4 bg-white container mx-auto py-5'>
        <h3 className='mb-5 font-semibold'>جدیدترین لپ تاپ ها</h3>
        <LastestLaptopsSlider />
    </div>
  )
}
