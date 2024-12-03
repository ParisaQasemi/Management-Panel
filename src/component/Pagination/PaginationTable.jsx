import React, { useEffect, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Search from "../Search/Search";
import ModalBtn from "../Modal/ModalBtn";
import AddProduct from "../../pages/Store/Product/AddProduct";
import { useLocation } from "react-router-dom";
import AddCategory from "../../pages/Store/ProductGroupManagement/AddCategory";
import SpinnerLoad from "../SpinnerLoad";

const PaginationTable = ({
  data,
  dataInfo,
  // additionField,
  numOfPage,
  searchParams,
  setForceRender,
  loading,
  colorClass = "border-blue-500",
  additionalElement,
}) => {
  const pageRange = 3;

  const [initData, setInitData] = useState(data);
  // Table
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // Pagination
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  // Search
  const [searchChar, setSearchChar] = useState("");

  // Table
  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);
  // Pagination
  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);
  // Search
  useEffect(() => {
    setInitData(
      data.filter((d) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar, data]);
  // Modal Button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Modal Button and Search */}
      <div className="flex justify-between">
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

      {/* Table Product */}

      {loading ? (
        <SpinnerLoad colorClass={colorClass} />
      ) : data.length ? (
        <table className="table text-right my-5 bg-gradient-custom backdrop-blur-lg">
          <thead className="text-lg font-bold text-white">
            {/* <tr>
              {dataInfo.map((i) => (
                <th key={i.field}>{i.title}</th>
              ))}
              {additionField
                ? additionField.map((a, index) => {
                    return <th key={a.id + "__" + index}>{a.title}</th>;
                  })
                : null}
            </tr> */}

            <tr>
              {dataInfo.map((i, index) => (
                <th key={i.field || `notField__${index}`}>{i.title}</th>
              ))}
            </tr>
          </thead>

          <tbody className="text-sm font-light text-gray-300">
            {tableData.map((d) => (
              // <tr key={d.id}>
              //   {dataInfo.map((i) => (
              //     <th key={`${i.field}_${d.id}`}>{d[i.field]}</th>
              //   ))}
              //   {additionField
              //     ? additionField.map((a, index) => {
              //         return <td key={a.id + "__" + index}>{a.elements(d)}</td>;
              //       })
              //     : null}
              // </tr>

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
  );
};

export default PaginationTable;
