import Image from 'next/image'
import React from 'react'

const BestSellingCards = ({...data}) => {
  return (
    <div className='flex flex-col p-6 relative  rounded-3xl gap-y-20 bg-gradient-to-tr from-slate-50 to-white shadow-2xl shadow-gray-300'>
          <div className="absolute left-0 -top-20 w-[180px] drop-shadow-md ">
          <Image src={data.img} width={640} height={480} className='mix-blend-luminosity '/>
          </div>

      <div className="flex  justify-end">
        <div className="flex flex-col gap-y-2 basis-1/2 pl-2">
          <h6 className='text-xl font-medium text-[#64646A]'>{data.hashTag}</h6>
          <h3 className='text-[40px] font-semibold leading-[44px] text-clip'>{data.title}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <p>{data.desc}</p>
        <div className="flex justify-between items-center">
          <p className='text-[30px] font-medium'>{data.price}</p>
          <button className='px-[30px] py-[15px] text-lg uppercase font-medium text-white bg-[#1B1B1D] rounded-full'>{data.cta}</button>
        </div>
      </div>
        
    </div>
  )
}

export default BestSellingCards