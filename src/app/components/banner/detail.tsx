import React from "react";
import Image from "next/image";
import { IDetail } from "./types";

import "./index.css";

export default function Detail({ item }: { item: IDetail }) {
  return (
    <div className="w-full  rounded-md overflow-hidden p-1 bg-[#FF59DD]/[0.18] relative">
      <Image
        src={item.src}
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
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="text-xs leading-[18px] h-[160px] overflow-hidden text-ellipsis">
            {item.desc}
          </div>
          <div className=" mt-2 button font-bold  w-[110px] h-[35px] leading-[35px] text-black text-sm shadow-md text-center rounded-[35px]">
            Get started
          </div>
        </div>
      </div>
    </div>
  );
}
