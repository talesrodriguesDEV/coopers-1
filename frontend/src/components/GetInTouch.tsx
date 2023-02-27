import React from 'react'
import Image from 'next/image'

import square from '../images/square.png'
import mail from '../images/mail.png'
import getintouch from '../images/get-in-touch.png'
import tatiana from '../images/tatiana.png'
import smallrect from '../images/small-rectangle.png'

export default function GetInTouch() {
  return (
    <section className='mt-40 mx-8'>
        <form className='flex flex-col shadow-lg montserrat border text-xs px-4 text-[#06152B]'>
          <Image className='border rounded-full absolute -mt-20 w-40 ml-[4.5rem]' src={tatiana} alt="Tatiana" />
          <Image className='ml-10 -mt-2' src={smallrect} alt="Decoration" />
          <div className='mb-6 mt-24 flex items-center'>
            <Image className='absolute' src={square} alt="Green Square" />
            <Image className='absolute ml-[0.9rem]' src={mail} alt="Mail" />
            <Image className='ml-[4.5rem]' src={getintouch} alt="Get in touch" />
          </div>
          <div className='label-input'>
            <label>Your name</label>
            <input className='input' placeholder='Type your name here' />
          </div>
          <div className='flex justify-between'>
            <div className='label-input w-36'>
              <label className='w-min'>Email*</label>
              <input className='input' required placeholder='example@example.com' />
            </div>
            <div className='label-input w-36'>
              <label className='w-min'>Telephone*</label>
              <input className='input' required placeholder='( ) _____-____' />
            </div>
          </div>
          <div className='label-input'>
            <label>Message*</label>
            <textarea className='input' required placeholder='Type what you want to say to us' />
          </div>
          <button className='bg-[#46BD62] py-2 text-white font-bold mb-6' type='submit'>SEND NOW</button>
        </form>
      </section>
  )
}
