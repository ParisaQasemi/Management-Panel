import React from "react";

const SpinnerLoad = ({ colorClass, isSmall, inline }) => {
    return (
      <span className={`text-center ${!inline ? "block" : "inline-block mx-2"} ${colorClass}`}>
        <div
          className={`mx-auto my-3 border-4 border-t-transparent border-solid rounded-full animate-spin 
          ${isSmall ? "w-4 h-4" : "w-8 h-8"} ${colorClass}`}
          role="status"
        ></div>
      </span>
    );
  };
  

export default SpinnerLoad;
