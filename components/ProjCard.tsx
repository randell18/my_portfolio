import React from 'react'
import { motion } from 'framer-motion' 

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[350px] w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transtion-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{y: -100,opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            src="tailwindcss.png"
            className='w-32 h-32 object-contain object-center'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Html</h4>
            <p className='uppercase py-5 text-gray-300'>Started learning...Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, earum.</li>
                <li>Summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ProjectCard