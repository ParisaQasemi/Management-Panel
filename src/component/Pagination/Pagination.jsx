import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="join rounded-none">
        <button
          className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
        >
          <GrFormNextLink />
        </button>
        <button
          className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
        >
          1
        </button>
        <button
          className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff] btn-active"
        >
          2
        </button>
        <button
          className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
        >
          3
        </button>
        <button
          className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
        >
          <GrFormPreviousLink />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
