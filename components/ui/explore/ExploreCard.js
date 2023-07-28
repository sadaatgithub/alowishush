import Image from 'next/image'
import React from 'react'

const ExploreCard = ({...data}) => {
  return (
    <div className='basis-full rounded-3xl p-8 gap-y-16 flex flex-col shadow-2xl shadow-gray-200 bg-gradient-to-tr from-slate-50 to-white min-w-[340px] max-w-md'>
        <div className="flex flex-col gap-y-2">
            <h3 className="text-4xl font-semibold text-[#1B1B1D]">{data.title}</h3>
            <p className="text-2xl text-[#64646A]">{data.desc}</p>
        </div>
        <div className="grid place-items-center">
        <Image src={data.img} width={150} height={150}/>
        </div>
        <button className="bg-[#1B1B1D] px-8 py-4 text-white rounded-full uppercase">{data.cta}</button>
    </div>
  )
}

export default ExploreCard