import React, { useContext, useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import AddBrands from "./AddBrands";
import { apiPath } from "../../../services/httpService";
import Actions from "./tableAdditional/Actions";
import {
  deleteBrandService,
  getAllBrandsService,
} from "../../../services/Brands";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { CategoryContext } from "@/context/CategoryContext";
import { Alert, Confirm } from "../../../utils/alert";

const BrandsTable = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const { setEditId } = useContext(CategoryContext);
  const [brandToEdit, setBrandToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات" },

    {
      title: "لوگو",
      elements: (rowData) =>
        rowData.logo ? (
          <img src={apiPath + "/" + rowData.logo} width="40" />
        ) : null,
    },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setBrandToEdit={setBrandToEdit}
          handleDeleteBrand={handleDeleteBrand}
          setshowModal={setshowModal}
        />
      ),
    },
  ];

  // const additionField = [
  //   {
  //     title: "لوگو",
  //     elements: (rowData) =>
  //       rowData.logo ? (
  //         <img src={apiPath + "/" + rowData.logo} width="40" />
  //       ) : null,
  //   },
  //   {
  //     title: "عملیات",
  //     elements: (rowData) => (
  //       <Actions
  //         rowData={rowData}
  //         setBrandToEdit={setBrandToEdit}
  //         handleDeleteBrand={handleDeleteBrand}
  //         setshowModal={setshowModal}
  //       />
  //     ),
  //   },
  // ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
  };

  const handleGetAllBrands = async () => {
    setLoading(true);
    const res = await getAllBrandsService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  useEffect(() => {
    handleGetAllBrands();
  }, []);

  const handleDeleteBrand = async (brand) => {
    if (
      await Confirm(
        "حذف برند",
        `آیا از حذف ${brand.original_name} اطمینان دارید؟`
      )
    ) {
      const res = await deleteBrandService(brand.id);
      if (res.status == 200) {
        Alert("انجام شد", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != brand.id));
      }
    }
  };

  const handleOpenModal = (brand) => {
    setEditId(null);
    setshowModal(true);
    setBrandToEdit(brand || null);
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        // additionField={additionField}
        numOfPage={5}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />

      {showModal && (
        <AddBrands
          setData={setData}
          brandToEdit={brandToEdit}
          setBrandToEdit={setBrandToEdit}
        >
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddBrands>
      )}
    </>
  );
};

export default BrandsTable;
