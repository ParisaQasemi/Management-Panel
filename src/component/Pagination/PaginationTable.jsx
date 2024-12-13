import React, { useEffect, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Search from "../Search/Search";
import { useLocation } from "react-router-dom";
import SpinnerLoad from "../SpinnerLoad";

const PaginationTable = ({
  data,
  dataInfo,
  numOfPage,
  searchParams,
  loading,
  colorClass = "border-blue-500",
  additionalElement,
}) => {
  const pageRange = 3;

  const [initData, setInitData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar, data]);

  return (
    <div>
      <div className="flex justify-between ">
        <div className="w-full">
          <div className="flex justify-between">
            <Search
              setSearchChar={setSearchChar}
              placeholder={searchParams.placeholder}
            />
            {additionalElement || ""}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-5">
        {loading ? (
          <SpinnerLoad colorClass={colorClass} />
        ) : data.length ? (
          <table className="table text-right bg-gradient-custom backdrop-blur-lg bg-blue-800 w-full">
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
      </div>

      <div className="flex justify-center items-center PaginationBtn  mt-5">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className="mx-1 p-2  bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <GrFormPreviousLink />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`mx-1 p-1 w-7 h-8 text-center font-bold text-sm rounded ${
              currentPage === page
                ? "text-white bg-[#0075ff]"
                : "bg-gray-200 text-black"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            currentPage < pages.length && setCurrentPage(currentPage + 1)
          }
          className="mx-1 p-2  bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === pages.length}
        >
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
