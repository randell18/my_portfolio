'use client'
import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }
type Props = {}

const ContactMe = (props: Props) => {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:rndllebelte@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
      }
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>Contact Me</h3>

        <div className='flex flex-col space-y-10 mt-20'>
            <h4 className='font-semibold text-4xl text-center'>Let's Talk</h4>
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <AiOutlinePhone className='text-cyan-400 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+09957311422</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <BiEnvelope className='text-cyan-400 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl mb-2'>+rndllebelte@gmail.com</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                        <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                    <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>
                    <button className='border-4 border-cyan-400 py-2 px-5 rounded-md text-white font-bold text-lg animate-pulse' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe