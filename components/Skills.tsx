import React from 'react'
import SkillsCard from './SkillsCard'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

const Skills = ({directionLeft}: Props) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
     className='flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>Skills</h3>


      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-base'>Hover over a skill for currency profieciency</h3>
      
      <motion.div
        initial={{x: directionLeft ? -200 : 200,
          opacity:0
          }}
          transition={{duration:1}}
          whileInView={{opacity:1,x:0}}
      className='grid grid-cols-4 gap-5 mt-20'>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='html.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>80%</p>
            </div>
          </div>
        </div>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='css.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>60%</p>
            </div>
          </div>
        </div>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='tailwindcss.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>60%</p>
            </div>
          </div>
        </div>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-cover object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='JavaScript.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>50%</p>
            </div>
          </div>
        </div>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='react.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>50%</p>
            </div>
          </div>
        </div>
          <div className='group relative flex cursor-pointer'>
          <img
              className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
              src='nextjs.png'
          />
          <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>50%</p>
            </div>
          </div>
        </div>
      </motion.div>
    
    </motion.div>
  )
}

export default Skills