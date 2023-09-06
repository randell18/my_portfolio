import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }} 
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      src='profile.jpg' className='-mb-36 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:h-[350px] xl:w-[300px]'/>
      <div className='space-y-6 px-0 md:px-10 -mb-28 md:mb-0'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-cyan-400'>little</span> background</h4>
          <p className='text-base'>I'm Randell, a fresh graduate ready to begin a fruitful career in web development. My love of coding and dedication to lifelong learning motivate me to succeed in building engaging and dynamic websites.
          </p>
      </div>
    </motion.div>
  )
}

export default About