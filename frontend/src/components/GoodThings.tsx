import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import rect from '../images/rectangle.png'
import pic1 from '../images/pic1.png'
import smallV from '../images/small-v.png'

export default function GoodThings() {
  return (
    <section className='mt-[30rem] h-96'>
      <Image className='absolute z-0 px-10 h-60' src={rect} alt="Background Decorantion" />
      <h1 className='absolute z-10 left-16 mt-2 text-white montserrat font-bold text-xl'>good things</h1>
      <div className='w-3/4 absolute z-10 mt-12 left-16 bg-white rounded-xl overflow-hidden drop-shadow-[8px_8px_24px_rgba(12,41,208,0.16)]'>
        <Image className='' src={pic1} alt="Two guys smiling and staring at the notebook" />
        <Image className='absolute right-3 -mt-7' src={smallV} alt="Coopers' logo" />
        <div className='p-4'>
          <h2 className='text-[#9499B3] border border-[#9499B3] py-0.5 px-2 rounded-xl w-min text-sm'>function</h2>
          <p className='mt-4 mb-10 montserrat text-[#312F4F]'>Organize your daily job enhance your life performance</p>
          <Link href='' className='text-[#42D76B] font-bold'>read more</Link>
        </div>
      </div>
      <div>
        {/* carousel dots */}
      </div>
    </section>
  )
}
