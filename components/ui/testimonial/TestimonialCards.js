import FiveStar from "@/components/common/FiveStar";
import Image from "next/image";
import React from "react";

const TestimonialCards = () => {
  return (
    <div className="lg:-ml-40 flex gap-8">
    <div className="md:flex flex-col w-[468px] rounded-[16px] shadow-2xl overflow-hidden testimonial_card hidden ">
      <div className=" h-[324px] overflow-hidden rounded-t-[16px]">
        <Image src="/test_1.jpg" width={650} height={434} className="w-full h-full object-cover"/>
      </div>
      <div className="p-5 flex flex-col gap-8 testimonial_card">
        <div className="flex gap-4">
          <h6 className="text-2xl font-semibold text-[#1B1B1D]">Brooklyn Simmons</h6>
          <FiveStar />
        </div>
        <p>
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia”
        </p>
      </div>
    </div>
    <div className="flex flex-col w-[468px] rounded-[16px] shadow-2xl overflow-hidden ">
    <div className="h-[324px] overflow-hidden rounded-t-[16px]">
      <Image src="/test_2.jpg" width={650} height={434} className="w-full h-full object-cover"/>
    </div>
    <div className="p-5 flex flex-col gap-8 testimonial_card">
      <div className="flex gap-4">
        <h6 className="text-2xl font-semibold text-[#1B1B1D]">Imam White</h6>
        <FiveStar />
      </div>
      <p>
        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia”
      </p>
    </div>
  </div>
  </div>
  );

};

export default TestimonialCards;
