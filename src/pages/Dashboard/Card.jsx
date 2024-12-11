import React from "react";

const Card = ({
  currentValue,
  title,
  desc,
  icon,
  lastWeekValue,
  lastMonthValue,
  color,
}) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-1">
      <div
        className={`${color} text-dark rounded-lg shadow-md p-4 bg-gradient-custom backdrop-blur-lg `}
      >
        <div className="flex">
          <div className="flex-1">
            <h4 className="text-xl font-bold">{currentValue}</h4>
            <h6 className="text-base font-semibold truncate">{title}</h6>
            <small className="text-sm text-gray-400 truncate">{desc}</small>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
            <div className="text-lg text-[#0075ff]">{icon}</div>
          </div>
        </div>
      </div>

      <div
        className={`${color} text-dark rounded-lg shadow-md p-4 mt-1 flex flex-col bg-gradient-custom backdrop-blur-lg`}
      >
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
