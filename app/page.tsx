'use client'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Project'
import Project from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
     <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 snap-y snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-400'>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='skills' className='snap-center'>
        <Project />
      </section>
      <section id='project' className='snap-start'>
        <Skills />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' src="2x2dell.jpg" alt="" />
          </div>
        </footer>
      </Link>
     </div>
  )
}
