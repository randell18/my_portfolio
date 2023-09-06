import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1.5
        }}
      className='flex flex-row items-center'>
        <SocialIcon 
          url="https://github.com/randell18" 
          fgColor='cyan'
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://facebook.com/randellebelte" 
          fgColor='cyan'
          bgColor='transparent'
        />
      </motion.div>
      <Link href='#contact'>
        <motion.div
          initial={{x:500,opacity:0,scale:0.5}}
          animate={{x:0,opacity:1,scale:1}}
          transition={{duration:1.5}}
        className='flex flex-row items-center text-gray-300 cursor-pointer
        '>
          <SocialIcon 
            network='email'
            className='cursor-pointer'
            fgColor='cyan'
            bgColor='transparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-cyan-400'>Get in touch</p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header