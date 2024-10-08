import React, { useEffect, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Search from "../Search/Search";
import ModalBtn from "../Modal/ModalBtn";
import AddProduct from "../../pages/Store/Product/AddProduct";

const PaginationTable = ({
  data,
  dataInfo,
  additionField,
  numOfPage,
  searchParams,
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
  }, [searchChar]);
  // Modal Button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Modal Button and Search */}
      <div className="flex justify-between">
        <Search setSearchChar={setSearchChar} />
        <ModalBtn onClick={toggleModal} />
        {isModalOpen && <AddProduct />}
      </div>

      {/* Table Product */}
      <table className="table text-right my-5 bg-gradient-custom backdrop-blur-lg">
        <thead className="text-md font-bold text-white">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>

        <tbody className="text-sm">
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <th key={`${i.field}_${d.id}`}>{d[i.field]}</th>
              ))}
              {additionField ? (
                <th key={`additional_${d.id}`}>
                  {additionField.elements(d.id)}
                </th>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

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
