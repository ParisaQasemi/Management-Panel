import React, { useEffect, useState } from "react";
import SpinnerLoad from "../SpinnerLoad";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Search from "../Search/Search";

const PaginatiedDataTable = ({
  children,
  tableData,
  dataInfo,
  loading,
  pageCount,
  currentPage,
  setCurrentPage,
  searchParams,
  handleSearch,
  setshowModal,
  handleOpenModal,
  additionalElement,
}) => {
  const pageRange = 3;

  const [pages, setPages] = useState([]);
  let timeout;

  const handleSetSearchChar = (char) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("send ...");
      handleSearch(char);
    }, 2000);
  };

  useEffect(() => {
    let pArr = [];
    for (let i = 1; i <= pageCount; i++) pArr.push(i);
    setPages(pArr);
  }, [pageCount]);

  return (
    <>
      <div className="flex justify-between ">
        <div className="w-full">
          <div className="flex justify-between ">
            <Search
              setSearchChar={handleSetSearchChar}
              placeholder={searchParams.placeholder}
            />
            {additionalElement || ""}
          </div>
        </div>

        {/* <div className="w-52 bg-green-400 flex items-end my-3">{children}</div> */}
      </div>

      <div className="overflow-x-auto my-5">
        {loading ? (
          <SpinnerLoad colorClass={"text-blue-400"} />
        ) : tableData.length ? (
          <table className="table text-right my-5 bg-gradient-custom  bg-blue-800 backdrop-blur-lg">
            <thead className="text-lg font-bold text-white">
              <tr>
                {dataInfo.map((i, index) => (
                  <th key={i.field || `notField__${index}`}>{i.title}</th>
                ))}
              </tr>
            </thead>

            <tbody className="text-sm font-light text-gray-300">
              {tableData.map((d) => (
                <tr key={d.id}>
                  {dataInfo.map((i, index) =>
                    i.field ? (
                      <td key={`${i.field}_${d.id}`}>{d[i.field]}</td>
                    ) : (
                      <td key={d.id + "__" + i.id + "__" + index}>
                        {i.elements(d)}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center text-red-600 font-bold mt-5">
            هیچ رکوردی یافت نشد
          </h3>
        )}

        {/* Pagination Table button */}
        {pages.length > 1 ? (
          <div className="flex justify-center items-center" dir="ltr">
            <div className="join rounded-none">
              <button
                className="join-item btn btn-sm mx-1 rounded-lg border-none
         text-white bg-[#74b0f5] hover:bg-[#0075ff]"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <GrFormPreviousLink />
              </button>

              {currentPage > pageRange ? (
                <button
                  className={`join-item btn btn-sm me-1 rounded-lg border-none
     text-white bg-[#74b0f5] hover:bg-[#0075ff] 
     `}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
              ) : null}

              {pages.map((page) => {
                return page < currentPage + pageRange &&
                  page > currentPage - pageRange ? (
                  <button
                    key={page}
                    className={`join-item btn btn-sm mx-1 rounded-lg border-none
         text-white bg-[#74b0f5] hover:bg-[#0075ff]
              ${currentPage === page ? "bg-[#0075ff]" : ""}
         `}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ) : null;
              })}

              {currentPage <= pageCount - pageRange ? (
                <button
                  className={`join-item btn btn-sm ms-1 rounded-lg border-none
     text-white bg-[#74b0f5] hover:bg-[#0075ff] 
     `}
                  onClick={() => setCurrentPage(pageCount)}
                >
                  {pageCount}
                </button>
              ) : null}

              <button
                className="join-item btn btn-sm mx-1 rounded-lg border-none
         text-white bg-[#74b0f5] hover:bg-[#0075ff]"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageCount}
              >
                <GrFormNextLink />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PaginatiedDataTable;
