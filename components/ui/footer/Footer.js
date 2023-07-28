import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="lg:px-28 px-8 py-20 flex flex-col gap-y-28">
      <div className="flex justify-between flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-y-10 basis-2/3 ">
          <Link href="/">
            <Image src="/alowishush.png" width={307} height={122} />
          </Link>
          <p className="text-[30px] leading-[40px] text-[#64646A] [text-wrap:balanced] max-w-xl">
            We made it our mission to create community everyday and grow
            meaningful, lasting relationships with our staff, our suppliers and
            of course you, our customers.
          </p>
        </div>
        <div className="flex flex-col gap-y-[30px] basis-1/3">
            <h4 className="text-[40px] leading-[50px] font-extrabold">Contact Alowishus!</h4>
            <div className="flex flex-col gap-y-[30px]">
                <div className="flex gap-x-6  items-center">
                    <div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/email.svg" width={28} height={28} alt="email icon"/>
                    </div>
                        <p className="text-[30px] leading-[44px] text-[#64646A]">alowishush@gmail.com</p>
                </div>
                <div className="flex gap-x-6  items-center">
                    <div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/call.svg" width={28} height={28} alt="email icon"/>
                    </div>
                        <p className="text-[30px] leading-[44px] text-[#64646A]">+110 214 214 2451</p>
                </div>
                <div className="flex gap-6">
                <div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/bxl-facebook.svg" width={28} height={28} alt="email icon"/>
                    </div><div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/bxl-instagram-alt.svg" width={28} height={28} alt="email icon"/>
                    </div><div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/bxl-twitter.svg" width={28} height={28} alt="email icon"/>
                    </div><div class="w-[60px] h-[60px] bg-white rounded-full grid place-items-center shadow-lg">
                        <Image src="/bxl-linkedin.svg" width={28} height={28} alt="email icon"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="flex lg:gap-40 gap-20 flex-col md:flex-row">
        <div className="flex flex-col gap-y-[30px]">
        <div className="flex flex-col gap-y-[30px]">
            <h6 className="text-[40px] leading-[50px] font-extrabold text-[#1B1B1D]">Store Locations</h6>
            <p className="text-[30px] leading-[40px] max-w-xl text-[#64646A]">Find your nearest Alowishus store with opening hours, location and contact details.</p>
            </div>
            <div className="flex gap-1">
                <p className="text-lg text-[#1B1B1D] font-semibold uppercase">Find my Alowishus </p><Image src="/arrow-left.svg" width={20} height={20}/>
            </div>

        </div>

        <div className="flex flex-col gap-y-[30px]">
            <h4 className="text-[40px] leading-[50px] font-extrabold text-[#1B1B1D]">First One’s On Us!</h4>
        <div className=""><input type="text" placeholder="Email" className="p-4 w-full rounded-full shadow-xl text-[22px] pl-8"/></div>
        <button className="uppercase bg-[#1B1B1D] text-white px-10 py-5 rounded-full self-start">Subscribe</button>
        </div>

      </div>

      <div className="flex gap-12 flex-col ">
      <hr/>
      <div className="flex flex-col justify-between items-center gap-6 text-[22px] leading-[30px] text-[#64646A] md:flex-row">
        <p>Copytright © 2022 <span className="text-[#1B1B1D] font-medium">Alowishus Delicious</span></p>
        <div className="flex gap-3  ">
            <p>Terms of Use</p>
            <p>|</p>
            <p>Privacy of Policy</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
