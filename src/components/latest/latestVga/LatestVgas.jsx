import React from 'react'
import LastestVgasSlider from './LatestVgasSlider'
export default function LatestVgas() {
  return (
    <div className='shadow-md rounded-xl p-4 bg-white py-5 container mx-auto'>
        <h3 className='mb-5 font-semibold'>جدیدترین کارت گرافیک ها</h3>
        <LastestVgasSlider />
    </div>
  )
}
