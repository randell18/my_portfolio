import React from 'react'
import { motion } from 'framer-motion' 

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        // scale: [1,2,2,2,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-[400px] animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[400px]'/>
        <div className='absolute border border-cyan-400 opacity-20 rounded-full h-[400px] w-[400px] animate-pulse mt-[400px]'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-[400px]'/>
    </motion.div>
  )
}
export default BackgroundCircles