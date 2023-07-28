import Image from 'next/image'
import React from 'react'

const OrderCofee = () => {
  return (
    <div className="w-full px-8 lg:px-28 py-28 flex flex-col md:flex-row">
        <div className="basis-1/2">
            <Image src="/cups_cofee.png" width={1030} height={736} className='drop-shadow-2xl'/>
        </div>
        <div className="basis-1/2 flex flex-col gap-y-[60px]">
            <div className="flex flex-col gap-y-[30px] text-center">
                <h3 className="text-[64px] leading-[70px] font-extrabold text-[#1B1B1D]">Order Your Favourite Cofee</h3>
                <p className="text-2xl text-[#64646A]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        <button className="px-10 py-5 bg-[#1B1B1D] text-white rounded-full self-center lg:self-start text-lg font-medium uppercase">Order Now</button>

        </div>
    </div>
  )
}

export default OrderCofee