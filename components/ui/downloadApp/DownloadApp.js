import Image from 'next/image'
import React from 'react'

const DownloadApp = () => {
  return (
    <div className='w-full px-8 lg:px-28 py-16 flex justify-center items-center gap-12 lg:gap-6  overflow-hidden flex-col lg:flex-row'>
        <div className="flex flex-col gap-y-[60px] md:basis-1/2 basis-full">
            <div className="flex flex-col gap-y-[30px]">
                <h2 className="text-[#1B1B1D] text-[64px] leading-[70px] font-extrabold">Instant Coffee At Your Home</h2>
                <p className="text-2xl text-[#64646A]">Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. Velit officia consequat <br/>duis enim velit mollit. Exercitation veniam <br/>consequat sunt nostrud amet. </p>
            </div>
            <button className="uppercase bg-[#1B1B1D] text-white rounded-full px-10 py-5 self-center lg:self-start">Download Our App</button>
        </div>
        <div className="relative md:basis-1/2 flex  justify-center items-center z-[1]">
            <div className="ellipse  absolute -left-12"></div>
            <div className=" w-[292px]  h-auto  border-8 rounded-2xl border-white ml-20 mt-4 shadow-[0px_45px_80px_0px_rgba(175,183,190,0.21)]">
            <Image src="/app_img.png" width={292} height={675} alt='app download image' className='rounded-2xl'/>
            </div>
            <div className="absolute  w-[292px] -translate-x-16 h-auto border-8 rounded-2xl border-white -z-[1] -rotate-12 shadow-[0px_45px_80px_0px_rgba(175,183,190,0.21)]">
            <Image src="/app_img.png" width={292} height={675} alt='app download image' className='rounded-2xl'/>
            </div>

        </div>
    </div>
  )
}

export default DownloadApp