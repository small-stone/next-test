"use client";

import React from "react";
import Image from "next/image";

import Banner from "./components/banner";

import "./index.css";

const tagList = ["Romantic", "Fiction", "Love story", "Function"];
const keywords = ["Time travel", "RPG", "Science Fiction", "Fantasy"];

export default function Detail({ params }: { params: { id: string } }) {
  return (
    <div>
      <Banner />
      <div className="py-3 px-4">
        <div className=" text-xl font-bold">Goddess Maria</div>
        <div className="flex items-center gap-2 justify-end">
          <div className="w-[32px] h-[32px] rounded-[32px] overflow-hidden">
            <Image src="/avatar.png " alt="avatar" width={32} height={32} />
          </div>
          <div className="text-pink-700 text-base font-bold">Fannings</div>
        </div>
        <div className="mt-3 mb-4">
          You find yourself in a vast celestial landscape,with the radiant
          figure of Goddess Maria shining brightly beyond the sun. Her golden
          aura illuminates the surroundings casting a warm light on the ethereal
          clouds that float in the sky.
        </div>
        <div className="mb-4 flex flex-wrap text-pink-700 text-sm gap-4">
          {tagList.map((tag) => (
            <div key={tag}>#{tag}</div>
          ))}
        </div>
        <div className="flex gap-4 text-violet-950 text-sm mb-4">
          {keywords.map((keyword) => (
            <div className="px-2 py-1 rounded-[30px] bg-gray-200" key={keyword}>
              {keyword}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div className="relative w-[95px] h-[40px] mr-2">
              <div className="contributors-dot"></div>
              <div className="contributors-dot left-[28px]"></div>
              <div className="contributors-dot right-0"></div>
            </div>
            <div className="text-blue-900 text-sm">+28 contributors</div>
          </div>
          <div className="flex gap-1">
            <Image src="/detail-dot.svg" alt="dot" width={20} height={20} />
            <div className="text-violet-950 text-xl font-bold">2429</div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="button"> Enter Dream </div>
        </div>
        <div className="text-blue-900 text-sm  text-center flex justify-center items-center">
          <div>View Dream Details</div>
          <Image
            src="/right.svg"
            width={24}
            height={24}
            alt="View Dream Details"
          />
        </div>
      </div>
    </div>
  );
}
