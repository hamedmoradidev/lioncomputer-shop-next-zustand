'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import supabase from '../../../lib/supabase';
import ProductCard from '@/components/product/ProductCard';
export default function SuggestionSlider() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('Lioncomputer').select('*').eq('suggested', 'true')
      if (error) console.error(error)
      else setData(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 5, spaceBetween: 40 },        
        }}
        className="mySwiper"
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
              <div className="flex justify-center">
            <ProductCard product={product} />
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
