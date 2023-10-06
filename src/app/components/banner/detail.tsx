import React from "react";
import Image from "next/image";

import "./index.css";

export default function Detail() {
  return (
    <div className="w-full  rounded-md overflow-hidden p-1 bg-[#FF59DD]/[0.18] relative">
      <Image
        src="/banner.jpeg"
        width={400}
        height={245}
        alt="banner"
        className="rounded-md"
      />
      <Image
        src="/bage.svg"
        width={146}
        height={131}
        alt="badge"
        className=" absolute top-[-50px] left-[-10px]"
      />

      <div className="flex flex-row-reverse banner-text-wrapper w-[80%] absolute right-1 top-1 bottom-1">
        <div className="w-[130px] mt-2">
          <div className="text-2xl font-bold">Arachna</div>
          <div className="text-xs leading-[18px] h-[160px] overflow-hidden text-ellipsis">
            A group of spider women on the outskirts of the city. These fierce
            and elegant creatures possess the upper body of a woman and the
            lower body of a spider...
          </div>
          <div className=" mt-2 button font-bold  w-[110px] h-[35px] leading-[35px] text-black text-sm shadow-md text-center rounded-[35px]">
            Get started
          </div>
        </div>
      </div>
    </div>
  );
}
