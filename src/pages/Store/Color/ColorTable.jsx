import React, { useContext, useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import AddColor from "./AddColor";
import { Alert, Confirm } from "../../../utils/alert";
import ModalBtn from "../../../component/Modal/ModalBtn";
import CloseModalBtn from "../../../component/Modal/CloseModalBtn";
import { CategoryContext } from "../../../context/CategoryContext";
import Actions from "./tabaleAddition/Actions";
import { deleteColorService, getAllColorsService } from "../../../services/colors";

const ColorTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const { setEditId } = useContext(CategoryContext);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },
  ];

  const additionField = [
    {
      title: "رنگ",
      elements: (rowData) => (
        <div
          className="block"
          style={{ background: rowData.code, color: rowData.code }}
        >
          ...
        </div>
      ),
    },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setColorToEdit={setColorToEdit}
          handleDeleteColor={handleDeleteColor}
          setshowModal={setshowModal}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllColors = async () => {
    setLoading(true);
    const res = await getAllColorsService();
    res && setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteColor = async (color) => {
    if (await Confirm("حذف برند", `آیا از حذف ${color.title} اطمینان دارید؟`)) {
      const res = await deleteColorService(color.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != color.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllColors();
  }, []);

  const handleOpenModal = () => {
    setEditId(null);
    setshowModal(true);
    setColorToEdit(null);
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={8}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />

      {showModal && (
        <AddColor
          setData={setData}
          colorToEdit={colorToEdit}
          setColorToEdit={setColorToEdit}
        >
          <button onClick={() => setshowModal(false)}>
            <CloseModalBtn />
          </button>
        </AddColor>
      )}
    </>
  );
};

export default ColorTable;
