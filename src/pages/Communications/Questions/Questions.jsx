import React from "react";
import AddQuestion from "./AddQuestion";
import Search from "../../../component/Search/Search";
import ModalBtn from "../../../component/Modal/ModalBtn";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();

  const handleOpenModal = () => {
    navigate(<AddQuestion />);
  };
  return (
    <>
      <div className="flex justify-between mb-3">
        <Search placeholder="قسمتی از نام یا نام خانوادگی یا سوال را وارد کنید" />
        {/* <ModalBtn onClick={handleOpenModal} /> */}
      </div>

      <div className="overflow-x-auto my-5">
      <table className="table text-right bg-gradient-custom backdrop-blur-lg bg-blue-800 w-full rounded-lg">
        <thead className="text-lg font-bold text-white">
          <tr>
            <th>#</th>
            <th>نام و نام خانوادگی</th>
            <th>نوع سوال</th>
            <th>دسته</th>
            <th>قسمتی از متن</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-300">
          <tr>
            <td>1</td>
            <td>پریسا قاسمی</td>
            <td>پرسش</td>
            <td>محصولات</td>
            <td>قسمتی از متن سوال برای این محصول مثلا 100 کارکتر</td>
            <td>
              <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  فعال
                </label>
                <input
                  className="form-check-input pointer mx-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td>1403/10/12</td>
            <td>
              <FaTimes className="text-red-500 text-center mx-1" />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Questions;
