import React, { useState } from "react";
import Image from "next/image";
import Card from "./card";

import "./index.css";

const tagList = [
  {
    name: "Recommended",
    children: ["Default", "Recent", "Hot", "Nodes"],
  },
  {
    name: "Fan Fiction",
    children: ["Default", "Recent", "Hot", "Nodes"],
  },
  {
    name: "Sci-fi",
    children: ["Default", "Recent", "Hot", "Nodes"],
  },
  {
    name: "RPG",
    children: ["Default", "Recent", "Hot", "Nodes"],
  },
];
export default function Filter() {
  const [current, setCurrent] = useState(0);
  const [currentChild, setCurrentChild] = useState(0);

  return (
    <div className="">
      <div className="w-full text-blue-900 px-[30px]">
        <div className="border-b-[1px] border-[#EDEDED] flex justify-between py-2">
          {tagList.map((tag, index) => (
            <div
              key={tag.name}
              className={index === current ? "text-pink-700 font-bold" : ""}
              onClick={() => setCurrent(index)}
            >
              {tag.name}
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Image src="/next.svg" width={17} alt="next" height={17} />
          </div>
        </div>
        <div className="text-sm flex justify-between py-2">
          {tagList[current].children.map((child, index) => (
            <div
              className={currentChild === index ? "font-bold" : ""}
              key={child}
              onClick={() => setCurrentChild(index)}
            >
              <div>{child}</div>
              {currentChild === index && <hr className="current-tag" />}
            </div>
          ))}
          <div className="border-l-[1px] w-[50px] text-center">Filter</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
}
