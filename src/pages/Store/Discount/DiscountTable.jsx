import React, { useEffect, useState } from "react";
import PaginationTable from "../../../component/Pagination/PaginationTable";
import ModalBtn from "../../../component/Modal/ModalBtn";
import Actions from "./tableAddition/Actions";
import { convertDateToJalali } from "../../../utils/convertDate";
import { deleteDiscountService, getAllDiscountsService } from "../../../services/discount";
import { Outlet, useNavigate } from "react-router-dom";
import { Alert, Confirm } from "../../../utils/alert";

const DiscountTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },
    { field: "percent", title: "درصد تخفیف" },
    {
      field: null,
      title: "تاریخ انقضا",
      elements: (rowData) => convertDateToJalali(rowData.expire_at),
    },
    {
      field: null,
      title: "وضعیت",
      elements: (rowData) => (rowData.is_active ? "فعال" : "غیرفعال"),
    },
    {
      field: null,
      title: "مربوط به",
      elements: (rowData) => (rowData.for_all ? "همه" : "تعدادی از محصولات"),
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData}handleDeleteDiscount={handleDeleteDiscount}/>,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllDiscounts = async () => {
    setLoading(true);
    const res = await getAllDiscountsService();
    setLoading(false);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  const handleDeleteDiscount = async (discount)=>{
    if (await Confirm(discount.title, 'آیا از حذف این کد تخفیف اطمینان دارید؟')) {
      const res = await deleteDiscountService(discount.id)
      if (res.status === 200) {
        Alert('حذف شد...!', res.data.message, 'success');
        setData(old=> old.filter(d => d.id != discount.id))
      }
    }
  }

  useEffect(() => {
    handleGetAllDiscounts();
  }, []);

  const handleOpenModal = () => {
    navigate("add-discount-code");
  };

 

  return (
    <>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        numOfPage={5}
        searchParams={searchParams}
        loading={loading}
        additionalElement={<ModalBtn onClick={handleOpenModal} />}
      />
      <Outlet context={{setData}} />
    </>
  );
};

export default DiscountTable;
