"use client";

import { useState } from "react";
import Image from "next/image";

import "./index.css";

export default function Search({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  const [value, setValue] = useState("");
  const handleBlur = () => {
    onSearch(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className="search-container">
      <div>
        <Image src="/search.svg" width={24} height={28} alt="search" />
      </div>
      <div className="flex-1">
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Search for dreams"
          className="outline-0 w-full"
        />
      </div>
    </div>
  );
}
