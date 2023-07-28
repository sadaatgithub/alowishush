import BestSellingCofee from '@/components/ui/bestSellingCofee/BestSellingCofee'
import DownloadApp from '@/components/ui/downloadApp/DownloadApp'
import Explore from '@/components/ui/explore/Explore'
import Hero from '@/components/ui/hero/Hero'
import OrderCofee from '@/components/ui/orderCofee/OrderCofee'
import Testimonial from '@/components/ui/testimonial/Testimonial'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <Hero/>
      <Explore/>
      <OrderCofee/>
      <BestSellingCofee/>
      <DownloadApp/>
      <Testimonial/>
    </main>
  )
}
