import Image from 'next/image'
import React from 'react'
import ExploreCard from './ExploreCard'

const explore = [
    {
        id:1, title:"Our Catering",desc:"Alowishus Catering, delicious drop off Catering", img:"/food.svg",cta:"Order Catering"
    },
    {
        id:2, title:"The Food",desc:"Our entire menu is available as dine in or takeaway.", img:"/fast-food.svg",cta:"Food Menu"
    },{
        id:3, title:"The Gelato",desc:"Life is like GELATO, enjoy it before it melts.", img:"/ice-cream.svg",cta:"Discover More"
    },
]

const Explore = () => {
  return (
    <div className="relative w-full py-36 flex flex-col justify-center gap-y-[90px] px-8 lg:px-24">
        <Image src="/coffe-2.png" width={447} height={490} alt="cofee" className='absolute top-14 -left-56 rotate-[45deg] drop-shadow-2xl'/>
        <div className="flex flex-col gap-y-6  justify-center items-center text-center z-[1]">
            <h2 className="text-[64px] font-extrabold text-[#1B1B1D]">
            Explore Our Alowishus
            </h2>
            <p className="text-2xl text-[#64646A] ">
            A drink from the ‘My Alowishus’ bottled brews range OR <br/> grab one of our delicious coffee’s.
            </p>
        </div>
        <div className="flex gap-[30px] w-full justify-center flex-col md:flex-row">
            {explore.map(data => <ExploreCard key={data.id} {...data}/>)}
        </div>
        
    </div>
  )
}

export default Explore