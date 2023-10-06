"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "./card";

import "./index.css";

interface IProps {
  tagData: any[];
}

const filterList = ["Default", "Recent", "Hot", "Nodes"];

export default function Filter({ tagData }: IProps) {
  const [current, setCurrent] = useState(0);
  const [currentChild, setCurrentChild] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`/api/list?id=${current}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
      });
  }, [current]);

  return (
    <div className="">
      <div className="w-full text-blue-900 px-[30px]">
        <div className="border-b-[1px] border-[#EDEDED] flex justify-between py-2">
          {tagData.map((tag, index) => (
            <div
              key={tag.name}
              className={index === current ? "text-pink-700 font-bold" : ""}
              onClick={() => setCurrent(index)}
            >
              {tag.tag}
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Image src="/next.svg" width={17} alt="next" height={17} />
          </div>
        </div>
        <div className="text-sm flex justify-between py-2">
          {filterList.map((child, index) => (
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
        {list?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
