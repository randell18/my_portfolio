import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

const SkillsCard = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{x: directionLeft ? -200 : 200,
            opacity:0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            className='rounded-full border border-gray-500 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 object-contain object-center filter group-hover:grayscale transiton duration-300 ease-in-out'
            src='tailwindcss.png'
        />
        <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}

export default SkillsCard