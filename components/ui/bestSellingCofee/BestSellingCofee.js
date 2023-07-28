import React from 'react'
import BestSellingCards from './BestSellingCards'
import Image from 'next/image'

const iceCream = [
    {
        id:1, title:"Double Espresso",hashTag:"#1 Selling",desc:"Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",price:"$59.99",cta:"Order Now",
        img:"/grazzed_fit.png"
    },
    {
        id:2, title:"Caramel Frappe",hashTag:"#2 Selling",desc:"Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",price:"$59.99",cta:"Order Now",
        img:"/ways_fit.png"
    },  {
        id:3, title:"Iced Coffee",hashTag:"#3 Selling",desc:"Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",price:"$59.99",cta:"Order Now",
        img:"/collaborate_fit.png"
    },
]

const BestSellingCofee = () => {
  return (
    <div className="w-full px-8 lg:px-28 py-16 flex flex-col justify-center items-center gap-36 relative">
        <Image src="/blur_pic.png" width={600} height={653} alt='' className='absolute right-0 top-0 w-[285px] '/>
        <div className="flex flex-col gap-y-6 text-center">
            <h3 className="text-[64px] text-[#1B1B1D] font-extrabold z-[1]">Best Selling Coffee</h3>
            <p className="text-2xl text-[#64646A]">A drink from the ‘My Alowishus’ bottled brews range OR <br/> grab one of our delicious coffee’s.</p>
        </div>
        <div className="flex gap-[30px] flex-col md:flex-row">
{iceCream.map(data => <BestSellingCards key={data.id} {...data}/>)}
</div>

    </div>
  )
}

export default BestSellingCofee