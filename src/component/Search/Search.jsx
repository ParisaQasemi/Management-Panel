import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ setSearchChar, placeholder }) => {
  return (
    <div className="relative w-52 md:w-96 mb-4 md:mb-0">
      <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-gray-400" />
      <input
        type="text"
        className=" w-full h-10 ps-8 py-2 rounded-xl bg-[#0f1535] text-sm text-white focus:outline-none border-[1px] border-gray-500"
        placeholder={placeholder}
        onChange={(e)=>setSearchChar(e.target.value)}
      />
    </div>
  );
};

export default Search;
