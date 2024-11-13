import React from "react";

const ShowInFilter = ({ rowData }) => {
  return (
    <span className={rowData.in_filter ? "text-green-500" : "text-red-500"}>
      {rowData.in_filter ? "هست" : "نیست"}
    </span>
  );
};

export default ShowInFilter;
