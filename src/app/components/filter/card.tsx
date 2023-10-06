import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full  shadow-lg rounded-lg relative overflow-hidden">
      <div className="relative">
        <Image
          src="/top.png"
          layout="responsive"
          alt="banner"
          width={1000}
          height={500}
        />
        <div className=" text-[10px] leading-[15px] absolute right-2 bottom-0 text-white flex">
          <div className="flex items-center">
            <Image src="/eye.svg" width={16} height={16} alt="eye" />
            330.5K
          </div>
          <div className="flex items-center">
            <Image src="/dot.svg" width={26} height={26} alt="eye" />
            330.5K
          </div>
        </div>
        <Image
          src="/new.svg"
          width={140}
          height={140}
          alt="new"
          className=" absolute top-[-70px] left-[-10px]"
        />
      </div>
      <div className="p-2">
        <div className="text-slate-900 text-base font-bold">Spider Potter</div>
        <div className="flex">
          <div className="text-slate-900 text-xs  flex-1">
            Love, celebration, and a promise of forever.
          </div>
          <div>
            <Image src="/avatar.png" width={30} height={30} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
