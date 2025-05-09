import React from 'react'
import PromotionSlider from './PromotionSlider'
export default function Promotion() {
  return (
    <div className='bg-promotion py-10'>
      <div className='container mx-auto px-5'>
        <h3 className='text-2xl text-promotion-text mb-12 font-semibold'>محصولات فروش ویژه</h3>
        <PromotionSlider />
      </div>
    </div>
  )
}
