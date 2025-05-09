'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { Navigation, Autoplay } from 'swiper/modules';
export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false,}} className="mySwiper h-[400px]">
        <SwiperSlide>
          <Link href="/category/laptop">
            <Image 
              src="/main/laptop.webp" 
              alt="لپ‌تاپ" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/gpu">
            <Image 
              src="/main/vga.webp" 
              alt="کارت گرافیک" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/monitor">
            <Image 
              src="/main/monitor.webp" 
              alt="مانیتور" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/mouse">
            <Image 
              src="/main/mouse.webp" 
              alt="ماوس" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/headphone">
            <Image 
              src="/main/headset.webp" 
              alt="هدست" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/keyboard">
            <Image 
              src="/main/keyboard.webp" 
              alt="کیبورد" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/case">
            <Image 
              src="/main/case.webp" 
              alt="کیس کامپیوتر" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category/ram">
            <Image 
              src="/main/ram.webp" 
              alt="رم" 
              fill
              objectFit="cover"
              quality={100}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
