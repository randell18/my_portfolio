import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjCard'
import Link from 'next/link'

type Props = {}

function Project({}: Props) {
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
    className='max-w-4xl flex flex-col relative h-screen text-center md:flex-row overflow-hidden px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>Projects</h3>
    <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10 scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400 scrollbar-thin'>
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[350px] w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transtion-opacity duration-200 overflow-hidden'>
        <Link href='https://shopping-mu-jet.vercel.app/'>
          <motion.img
            initial={{y: -100,opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
              src="shopping.PNG"
              className='w-32 h-32 object-contain object-center'
          />
        </Link> 
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Shopping Cart</h4>
              <ul className='space-y-4 ml-5 text-lg'>
                  <li>A simple front-end shopping cart</li>
              </ul>
          </div>
      </article>
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[350px] w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transtion-opacity duration-200 overflow-hidden'>
          <Link href='https://thesis-next-h3k4.vercel.app/'>
            <motion.img
              initial={{y: -100,opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
                src="sidebar.PNG"
                className='w-32 h-32 object-contain object-center'
            />
          </Link>
          <div className='px-0 md:px-10'>
              <h4 className='text-4xl font-light'>Sidebar</h4>
              <ul className='space-y-4 ml-5 text-lg'>
                  <li>A sidebar component</li>
              </ul>
          </div>
      </article>
    </div>
    </motion.div>
  )
}

export default Project