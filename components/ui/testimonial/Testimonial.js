import FiveStar from '@/components/common/FiveStar'
import Image from 'next/image'
import React from 'react'
import TestimonialCards from './TestimonialCards'


const Testimonial = () => {
  return (
    <div className="py-20 flex gap-24 h-auto flex-col-reverse lg:flex-row">
            <div className="md:w-3/5 flex  gap-9 ">
                <TestimonialCards/>
                
            </div>
            <div className="flex flex-col gap-y-24 md:w-2/5">
                <div className="flex flex-col gap-y-10">
                    <h2 className="text-[64px] leading-[70px] font-extrabold">What Our Customer Say</h2>
                    <div className="flex gap-x-6">
                        <p className="text-[40px] leading-[40px] text-[#1B1B1D] font-semibold">4.9</p>
                        <div className="flex flex-col gap-y-2">
                            <FiveStar/>
                            <p className="text-[20px] leading-snug text-[#64646A]">based on 2452+ reviews</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-6">
                    <button class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/arrow-right.svg" width={20} height={20}/>
                    </button>
                    <button class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/arrow-left.svg" width={20} height={20}/>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Testimonial