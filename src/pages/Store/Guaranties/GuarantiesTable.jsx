import React, { useContext, useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import AddGuaranty from "./AddGuaranty";
import Actions from "./tableAddition/Actions";
import { Alert, Confirm } from "../../../utils/alert";
import ModalBtn from "../../../component/Modal/ModalBtn";
import { deleteGuaranteesService, getAllGuaranteesService } from "../../../services/guarantiese";
import { CategoryContext } from "@/context/categoryContext";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";

const GuarantiesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [guaranteeToEdit, setGuaranteeToEdit] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const { setEditId } = useContext(CategoryContext);


  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },

    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setGuaranteeToEdit={setGuaranteeToEdit}
          handleDeleteGuarantee={handleDeleteGuarantee}
          setshowModal={setshowModal} // اضافه کردن این پراپ

        />
      ),
    },
  ];

  // const additionField = [
  //   {
  //     title: "عملیات",
  //     elements: (rowData) => (
  //       <Actions
  //         rowData={rowData}
  //         setGuaranteeToEdit={setGuaranteeToEdit}
  //         handleDeleteGuarantee={handleDeleteGuarantee}
  //         setshowModal={setshowModal} // اضافه کردن این پراپ

  //       />
  //     ),
  //   },
  // ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllGuarantees = async () => {
    setLoading(true);
    const res = await getAllGuaranteesService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteGuarantee = async (guarantee) => {
    if (
      await Confirm("حذف برند", `آیا از حذف ${guarantee.title} اطمینان دارید؟`)
    ) {
      const res = await deleteGuaranteesService(guarantee.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != guarantee.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllGuarantees();
  }, []);

  const handleOpenModal = (guarantee) => {
    setEditId(null);
    setshowModal(true);
    // setGuaranteeToEdit(guarantee || null);
    setGuaranteeToEdit(null);

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
        <AddGuaranty
          setData={setData}
          guaranteeToEdit={guaranteeToEdit}
          setGuaranteeToEdit={setGuaranteeToEdit}
        >
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddGuaranty>
      )}
    </>
  );
};

export default GuarantiesTable;
