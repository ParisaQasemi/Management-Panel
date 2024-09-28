import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative w-52 md:w-auto mb-4 md:mb-0">
      <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-gray-400" />
      <input
        type="text"
        placeholder="جستجو ..."
        className=" w-full ps-8 py-2 rounded-xl bg-[#0f1535] text-sm text-white focus:outline-none border-[1px] border-gray-500"
      />
    </div>
  );
};

export default Search;
