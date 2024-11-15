import React, { useEffect, useState } from "react";
import Actions from "./tableAddition/Actions";
import {
  deleteProductService,
  getProductsService,
} from "../../../services/products";
import PaginatiedDataTable from "../../../component/Pagination/PaginatiedDataTable";
import { Alert, Confirm } from "../../../utils/alert";

const ProductTable = () => {
  // const params = useParams();
  // const [forceRender, setForceRender] = useState(0);
  // NEW Code
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const [countOnPage, setCountOnPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصول",
      elements: (rowData) =>
        rowData.categories && rowData.categories.length > 0
          ? rowData.categories[0].title
          : "نامشخص",
    },
    { field: "title", title: "عنوان" },
    { field: "price", title: "قیمت" },
    { field: "stock", title: "موجودی" },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions rowData={rowData} handleDeleteProduct={handleDeleteProduct} />
      ),
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

  const handleDeleteProduct = async (product) => {
    if (
      await Confirm("حذف محصول", `آیا از حذف ${product.title} اطمینان دارید؟`)
    ) {
      const res = await deleteProductService(product.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        handleGetProducts(currentPage, countOnPage, searchChar);
      }
    }
  };

  const handleSearch = (char) => {
    setSearchChar(char);
    handleGetProducts(1, countOnPage, char);
  };

  useEffect(() => {
    handleGetProducts(currentPage, countOnPage, searchChar);
  }, [currentPage]);

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
        numOfPage={2}
      />
    </>
  );
};

export default ProductTable;
