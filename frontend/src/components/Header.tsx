import React from 'react'
import Image from 'next/image'

import logo from '../images/logo.png'
import v from '../images/v.png'

export default function Header() {
  return (
    <header className='flex justify-between items-center mx-10 my-6'>
      <Image className='w-1/3' src={logo} alt="Coopers' logo" />
      <button className='bg-black text-white py-1 px-4 z-10 poppins'>entrar</button>
      <Image className='w-1/2 absolute top-14 right-0 z-0' src={v} alt="Background Decoration" />
    </header>
  )
}
