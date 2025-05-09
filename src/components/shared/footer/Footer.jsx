import React from 'react'
import { Youtube, Twitter } from 'lucide-react'
import ContactMe from './ContactMe'
export default function Footer() {
  return (
    <footer className='flex flex-wrap *:w-full *:flex container mx-auto px-5'>
        <div className='flex flex-wrap justify-between px-10 py-5'>
            <div className='flex items-center justify-between gap-5'>
            <h6 className='font-semibold'>عضویت در خبرنامه</h6>
            <input type="text" className='bg-backGround px-10 py-2 outline-0 w-40 md:w-[500px] rounded-3xl' placeholder='آدرس ایمیل خود را وارد کنید' />
            <a href="" className='rounded-3xl border-promotion-text text-promotion-text border-2 px-10 py-2'>عضویت</a>
            </div>
            <div className=''>
            <ul className='flex gap-5'>
                <li className='rounded-2xl w-13 h-13 bg-suggestion-text flex justify-center items-center'><Youtube color='white' /></li>
                <li className='rounded-2xl w-13 h-13 bg-suggestion-text flex justify-center items-center'><Twitter color='white' /></li>
            </ul>
            </div>
        </div>
        <div className='flex justify-center py-20'>
            <ContactMe />
        </div>
       <ul className='flex justify-around text-md font-semibold py-10'>
            <li>سوالات متداول</li>
            <li>چرا لیون کامپیوتر</li>
            <li>تالار گفتمان</li>
            <li>تماس با‌ ما</li>
            <li>راهنمای خرید و مقررات</li>
            <li>شرایط گارانتی</li>
            <li>اخبار</li>
            <li>درباره ما</li>
        </ul> 
        <div className='flex justify-center py-5'>
        <p className='text-center'>تمامی حقوق فروشگاه لیون کامپیوتر برای شرکت پیشرو رایانه هوشمند لیما محفوظ می‌باشد و هرگونه کپی‌برداری مستلزم کسب اجازۀ کتبی بوده و پیگرد قانونی خواهد داشت.</p>
        </div>
    </footer>
  )
}
