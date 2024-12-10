import React from "react";

const Card = ({ currentValue, title, desc, icon, lastWeekValue, lastMonthValue }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 m-2">

      <div className="bg-pink-300 text-dark rounded-lg shadow-md p-4">
        <div className="flex">
          <div className="flex-1">
            <h4 className="text-xl font-bold">{currentValue}</h4>
            <h6 className="text-base font-semibold truncate">{title}</h6>
            <small className="text-sm text-gray-900 truncate">{desc}</small>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
            <i className={`${icon} text-lg`}></i>
          </div>
        </div>
      </div>

      <div className="bg-pink-400 text-dark rounded-lg shadow-md p-4 mt-1 flex flex-col">
        <small className="text-sm font-medium truncate">
          <b>{lastWeekValue}</b> در هفته گذشته
        </small>
        <small className="text-sm font-medium truncate">
          <b>{lastMonthValue}</b> در ماه گذشته
        </small>
      </div>
    </div>
  );
};

export default Card;
