import React, { useContext, useEffect, useState } from "react";
import Actions from "./tableAddition/Actions";
import {
  deleteProductService,
  getProductsService,
} from "../../../services/products";
import PaginatiedDataTable from "../../../component/Pagination/PaginatiedDataTable";
import { Alert, Confirm } from "../../../utils/alert";
import { useHasPermission } from "../../../hooks/permissionsHook";
import ModalBtn from "../../../component/Modal/ModalBtn";
import { CategoryContext } from "@/context/categoryContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate()
  const params = useParams();
  const [forceRender, setForceRender] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchChar, setSearchChar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const { setEditId } = useContext(CategoryContext); 
  const hasAddCategoryPerm = useHasPermission("create_product");

  

  const dataInfo = [
    { field: "id", title: "#" },
    {
      field: null,
      title: "گروه محصول",
      elements: (rowData) => rowData.categories[0]?.title,
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

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
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

  const handleOpenModal = () => {
    setEditId(null); 
    navigate("/products/add-product");
  };
  return (
    <>
    <Outlet />
      <PaginatiedDataTable
        tableData={data}
        dataInfo={dataInfo}
        searchParams={searchParams}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        handleSearch={handleSearch}
        numOfPage={5}
        additionalElement={
          hasAddCategoryPerm && <ModalBtn onClick={handleOpenModal} />
        }
      />
    </>
  );
};

export default ProductTable;
