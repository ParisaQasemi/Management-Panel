import React, { useContext, useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import { useParams } from "react-router-dom";
import Actions from "./tableAddition/Actions";
import { getProductsService } from "../../../services/products";
import PaginatiedDataTable from "../../../component/Pagination/PaginatiedDataTable";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { CategoryContext } from "../../../context/CategoryContext";

const ProductTable = () => {
  // const params = useParams();
  // const [forceRender, setForceRender] = useState(0);
  const [showModal, setshowModal] = useState(false); // باز و بستن مدال
  const { setEditId } = useContext(CategoryContext);
  // NEW Code
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصول",
      elements: (rowData) => rowData.categories[0].title,
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  // const additionField = [
  //   {
  //     title: "تاریخ",
  //     elements: (rowData) => convertDateToJalali(rowData.created_at),
  //   },
  //   {
  //     title: "نمایش در منو",
  //     elements: (rowData) => <ShowInData rowData={rowData} />,
  //   },
  //   {
  //     title: "عملیات",
  //     elements: (rowData) => <Actions rowData={rowData} />,
  //   },
  // ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    // searchField: "title",
  };

  const handleGetProducts = async (page, count, char) => {
    setLoading(true);
    const res = await getProductsService(page, count, char);
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
      setPageCount(res.data.last_page);
    }
  };

  const handleSearch = (char)=> {
    setSearchChar(char)
    handleGetProducts(1, countOnPage, char)
  }

  useEffect(()=> {
    handleGetProducts(currentPage, countOnPage, searchChar)
  },[currentPage])

  const handleOpenModal = () => {
    setEditId(null);
    setshowModal(true);
    console.log('Buuuug')
  };

  return (
    <>
      <PaginatiedDataTable
        tableData={data}
        dataInfo={dataInfo}
        searchParams={searchParams}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        handleSearch={handleSearch}
        // additionField={additionField}
        numOfPage={5}
        // additionalElement={<ModalBtn onClick={() => setshowModal(true)} />} // باز و بستن مدال
        additionalElement={<ModalBtn onClick={handleOpenModal} />}

      />

      {/* باز و بستن مدال */}
      {showModal && (
        <AddProduct>
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddProduct>
      )}
    </>
  );
};

export default ProductTable;
