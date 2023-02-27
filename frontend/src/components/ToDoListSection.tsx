import React from 'react'
import Image from 'next/image'

import stripe from '../images/stripe.png'
import bigTriangle from '../images/big-triangle.png'
import smallTriangle from '../images/small-triangle.png'

export default function ToDoListSection() {
  return (
    <section className='mt-4'>
      <Image src={stripe} alt="Background Decoration" />
      <div className='-mt-[5.5rem] z-10 text-white text-center'>
        <h1 className='poppins font-semibold underline-offset-4 green-underline'>To-do List</h1>
        <p className='text-xs montserrat mx-14'>Drag and drop to set your  priorities, check when done and create what's new.</p>
      </div>
      <Image className='-left-10 absolute mt-40' src={bigTriangle} alt="Big Triangle - Decoration" />
      <Image className='-left-7 absolute mt-[14.2rem]' src={smallTriangle} alt="Small Triangle Decoration" />
      {/* <ToDoList /> */}
    </section>
  )
}
