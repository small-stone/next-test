import Image from "next/image";
import Search from "./components/search";
import Banner from "./components/banner";
import Filter from "./components/filter";

import "./index.css";

export default async function Home() {
  const data = await getData();
  const tagData = await getTag();

  return (
    <div className="min-h-screen px-2 pt-20 pb-[70px]">
      <div className="px-3 mb-7">
        <Search />
      </div>
      <div className="mb-[40px]">
        <Banner list={data} />
      </div>
      <Filter tagData={tagData} />
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

async function getData() {
  const res = await fetch(
    "https://next-test-git-main-smallstones-projects.vercel.app/api/banner",
    {
      next: { revalidate: 1 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTag() {
  const res = await fetch(
    "https://next-test-git-main-smallstones-projects.vercel.app//api/tag",
    {
      next: { revalidate: 1 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
