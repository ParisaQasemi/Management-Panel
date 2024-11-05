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
  additionField,
  numOfPage,
  searchParams,
  setForceRender,
  loading,
  colorClass = "border-blue-500",
  additionalElement,
}) => {
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
        <Search setSearchChar={setSearchChar} />
        {/* <ModalBtn onClick={toggleModal} />
        {isModalOpen && location.pathname === "/Product" && <AddProduct />}
        {isModalOpen && location.pathname.includes("/Category") && (
          <AddCategory setForceRender={setForceRender} />
        )} */}
        {additionalElement || ""}
      </div>

      {/* Table Product */}

      {loading ? (
        <SpinnerLoad colorClass={colorClass} />
      ) : data.length ? (
        <table className="table text-right my-5 bg-gradient-custom backdrop-blur-lg">
          <thead className="text-lg font-bold text-white">
            <tr>
              {dataInfo.map((i) => (
                <th key={i.field}>{i.title}</th>
              ))}
              {additionField
                ? additionField.map((a, index) => {
                    return <th key={a.id + "__" + index}>{a.title}</th>;
                  })
                : null}
            </tr>
          </thead>

          <tbody className="text-sm font-light text-gray-300">
            {tableData.map((d) => (
              <tr key={d.id}>
                {dataInfo.map((i) => (
                  <th key={`${i.field}_${d.id}`}>{d[i.field]}</th>
                ))}
                {additionField
                  ? additionField.map((a, index) => {
                      return <td key={a.id + "__" + index}>{a.elements(d)}</td>;
                    })
                  : null}
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

            {pages.map((page) => (
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
            ))}

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
