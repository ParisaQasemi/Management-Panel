import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Actions from "./tableAddition/Actions";
import {
  deleteDeliveryService,
  getAllDeliveriesService,
} from "../../../services/deliveries";
import { Alert, Confirm } from "../../../utils/alert";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import ModalBtn from "../../../component/Modal/ModalBtn";

const DeliveriesTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "amount", title: "هزینه" },
    {
      field: null,
      title: "مدت ارسال",
      elements: (rowData) => rowData.time + " " + rowData.time_unit,
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          handleDeleteDelivery={handleDeleteDelivery}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از آی دی کاربر را وارد کنید",
    searchField: "title",
  };

  const handleGetAllDeliveries = async () => {
    setLoading(true);
    const res = await getAllDeliveriesService();
    console.log(res);
    setLoading(false);
    if (res.status === 200) setData(res.data.data);
  };

  const handleDeleteDelivery = async (delivery) => {
    if (await Confirm(delivery.title, "آیا از حذف این مورد اطمینان دارید؟")) {
      const res = await deleteDeliveryService(delivery.id);
      if (res.status === 200) {
        Alert("حذف شد...!", res.data.message, "success");
        setData((old) => old.filter((d) => d.id != delivery.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllDeliveries();
  }, []);

  const handleOpenModal = () => {
    navigate("add-delivery");
  };

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />
      <Outlet context={{ setData }} />
    </>
  );
};

export default DeliveriesTable;
