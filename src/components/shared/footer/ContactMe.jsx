import React from 'react'
import HamedMoradi from './images/hamedmoradi.webp'
import { Instagram, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
export default function ContactMe() {
  return (
        <div id="aboutMe" className="flex flex-wrap justify-center items-center bottom-2 gap-10">
        <h2 className="w-full text-center text-3xl font-bold">توسعه دهنده: حامد مرادی</h2>
        <figure className='h-40 w-40 rounded-full overflow-hidden flex justify-center items-center shadow-2xl'>
        <Image src={HamedMoradi} alt="Hamed Moradi"></Image>
        </figure>
        <div className="flex justify-evenly w-full">
            <a className='rounded-2xl w-13 h-13 bg-suggestion-text flex justify-center items-center' href="https://www.linkedin.com/in/haamedmoradiidev/"><Linkedin color='white' /></a>
            <a className='rounded-2xl w-13 h-13 bg-suggestion-text flex justify-center items-center' href="https://github.com/hamedmoradidev"><Github color='white' /></a>
            <a className='rounded-2xl w-13 h-13 bg-suggestion-text flex justify-center items-center' href="https://instagram.com/hamed.moradi.dev"><Instagram color='white' /></a>    
        </div>
        </div>  
  )
}
