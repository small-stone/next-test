"use client";

import Image from "next/image";

import "./index.css";

export default function Search() {
  return (
    <div className="search-container">
      <div>
        <Image src="/search.svg" width={24} height={28} alt="search" />
      </div>
      <div className="flex-1">
        <input
          // onBlur={handleBlur}
          // onChange={handleChange}
          placeholder="Search for dreams"
          className="outline-0 w-full"
        />
      </div>
    </div>
  );
}
