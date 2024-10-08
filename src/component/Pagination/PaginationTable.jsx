import React, { useEffect, useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const numOfPage = 2;
const PaginationTable = ({ data, dataInfo, additionField }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let pCount = Math.ceil(data.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, []);

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(data.slice(start, end));
  }, [currentPage]);

  return (
    <div>
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
              {additionField ? <th key={`additional_${d.id}`}>{additionField.elements(d.id)}</th> : null}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center" dir="ltr">
        <div className="join rounded-none">
          <button
            className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
           onClick={()=> setCurrentPage(currentPage - 1)}
           disabled={currentPage === 1}
          >
            <GrFormPreviousLink />
          </button>

          {pages.map((page) => (
            <button key={page}
              className={`join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]
                ${currentPage === page ? 'bg-[#0075ff]' : ''}
           `}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="join-item btn btn-sm mx-1 rounded-lg border-none
           text-white bg-[#74b0f5] hover:bg-[#0075ff]"
           onClick={()=> setCurrentPage(currentPage + 1)}
           disabled={currentPage === pageCount}
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationTable;
