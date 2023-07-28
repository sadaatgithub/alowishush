import React from "react";
import star from "../../public/bxs-star.svg"
import Image from "next/image";

const FiveStar = () => {
  return (
    <div class="flex">
      <Image src={star} width={20} height={20} />
      <Image src={star} width={20} height={20} />
      <Image src={star} width={20} height={20} />
      <Image src={star} width={20} height={20} />
      <Image src={star} width={20} height={20} />
    </div>
  );
};

export default FiveStar;
