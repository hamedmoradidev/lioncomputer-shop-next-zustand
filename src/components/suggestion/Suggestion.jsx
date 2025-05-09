import React from 'react'
import SuggestionSlider from './SuggestionSlider'
export default function Suggestion() {
  return (
    <div className='bg-suggestion py-10'>
      <div className='container mx-auto px-5'>
        <h3 className='text-2xl text-suggestion-text mb-12 font-semibold'>محصولات پیشنهادی</h3>
        <SuggestionSlider />
      </div>
    </div>
  )
}
