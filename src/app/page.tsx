"use client";
import Image from "next/image";
import Search from "./components/search";
import Banner from "./components/banner";
import Filter from "./components/filter";

import "./index.css";

export default function Home() {
  const onSearch = (search: string) => {
    // 这里是搜索的逻辑
  };

  return (
    <div className="min-h-screen px-2 pt-20 pb-[70px]">
      <div className="px-3 mb-7">
        <Search onSearch={onSearch} />
      </div>
      <div className="mb-[40px]">
        <Banner />
      </div>
      <Filter />
      <div className="fixed w-full h-[65px] bottom-0 left-0 bg-white flex text-center text-violet-950 text-xs ">
        <div className="flex-1 flex justify-center items-center flex-col gap-1">
          <div className="footer-icon flex justify-center items-center">
            <Image src="/home.svg" width={24} height={22} alt="home" />
          </div>
          <div>Home</div>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col gap-1 opacity-30 text-violet-950 bg-stone-50">
          <div className=" flex justify-center items-center">
            <Image src="/user.svg" width={24} height={22} alt="home" />
          </div>
          <div>Mine</div>
        </div>
        <div className="absolute left-1/2 top-0 ml-[-40px]">
          <Image src="/logo.png" alt="logo" width={94} height={94} />
        </div>
      </div>
    </div>
  );
}
