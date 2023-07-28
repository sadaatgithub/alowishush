import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='px-[100px] pt-6 flex bg-[#EEEFF1] items-center z-[10]'>
        <Link href="/"><Image src="/alowishush.png" width={126} height={50}/></Link>
        <nav className='hidden md:flex gap-10 flex-row ml-auto items-center'>
            <ul className='flex gap-10 text-[15px] font-medium'>
                <li>Cafe Menu</li>
                <li>About Us</li>
                <li>Find Us</li>
                <li>Alowishush Catering</li>
            </ul>
            <div className='flex gap-[20px] justify-center items-center'>
                <div className='w-14 h-14 bg-white rounded-full grid place-items-center'>
                <Image src="/basket.svg" width={24} height={24}/>
                </div>
                <button className='text-[15px] uppercase font-medium px-8 py-4 bg-black text-white rounded-full'>Buy gift Voucher</button>

            </div>
        </nav>

    </header>
  )
}

export default Header