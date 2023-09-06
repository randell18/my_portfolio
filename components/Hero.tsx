'use client'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is Randell`,`I'm a Fresh Graduate`,`<WhoLovesToCode />`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=' mt-2 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='mb-96 w-16 h-16'/>
      <motion.img
         drag
         dragConstraints={{
           top: -50,
           left: -50,
           right: 50,
           bottom: 50,
         }}
      src="hero.jpg" alt="my_img" className='relative rounded-full h-32 w-32 object-cover'/>
      <h1 className='text-gray-500 text-sm text-center tracking-[15px] uppercase ml-4'>junior developer</h1>
      <div className='z-20'>
        <h1 className=' text-4xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='cyan'/>
        </h1>
        <div className='mt-6 md:mt-0 pt-2 '>
          <Link href='#about'>
           <button className='herobtn'>About</button>  
          </Link>
          <Link href='#skills'>
           <button className='herobtn'>Skills</button>
          </Link>
          <Link href='#project'>
            <button className='herobtn'>Project</button>
          </Link>
          <Link href='#contact'>
            <button className='herobtn'>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero