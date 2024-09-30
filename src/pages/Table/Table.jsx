import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaShoppingCart, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Table = () => {
  return (
    <div>
      <div className="w-full my-6 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <h3 className="text-white font-semibold"> پروژه ها</h3>
          <span className="text-gray-400 text-sm font-medium flex my-1">
            <IoCheckmarkDoneCircleSharp className="w-5 h-5 me-1 text-green-700" />{" "}
            این ماه انجام شد
          </span>
        </div>
        <div className="overflow-x-auto ">
          <table className="table mt-5">
            <thead className="text-right">
              <tr className="border-b border-gray-700 ">
                <th>شرکت ها </th>
                <th>اعضا</th>
                <th>بودجه</th>
                <th>تکمیل</th>
              </tr>
            </thead>
            <tbody className="text-right">
              <tr className="border-b border-gray-700 ">
                <td>طراحی نسخه UI </td>
                <td>
                  <div className="flex -space-x-3">
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                </td>
                <td>$14,000</td>
                <td>
                  <progress
                    className="progress progress-info w-56 mx-2"
                    value="10"
                    max="100"
                  ></progress>
                  10%
                </td>
              </tr>
              <tr className="border-b border-gray-700 ">
                <td>اپلیکیشن موبایل</td>
                <td>
                  <div className="flex -space-x-3">
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                </td>
                <td>$20,500</td>
                <td>
                  <progress
                    className="progress progress-info w-56 mx-2"
                    value="90"
                    max="100"
                  ></progress>
                  90%
                </td>
              </tr>
              <tr className="border-b border-gray-700 ">
                <td>فروشگاه آنلاین</td>
                <td>
                  <div className="flex -space-x-3">
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png"
                      className="w-7 h-7 rounded-full"
                    />
                    <img
                      src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                </td>
                <td>$2,000</td>
                <td>
                  <progress
                    className="progress progress-info w-56 mx-2"
                    value="40"
                    max="100"
                  ></progress>
                  25%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full my-6 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
        <div className=" mb-5 ">
          <h3 className="text-white font-semibold">نمای کلی سفارشات</h3>
          <span className="text-gray-400 text-sm font-medium flex my-1">
            <IoCheckmarkDoneCircleSharp className="w-5 h-5 me-1 text-green-700" />
            +30 درصد در این ماه
          </span>
        </div>
        <div className="space-y-4 text-white mt-10 text-sm">
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <IoMdNotifications className="w-5 h-5 me-2 text-red-500" />
              <span>2400 دلار، تغییرات طراحی</span>
            </div>
            <span className="text-sm ms-7 text-gray-400">22 مرداد 7:20 PM</span>
          </div>
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="w-5 h-5 me-2 text-yellow-300" />
              <span>سفارش جدید</span>
            </div>
            <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
          </div>
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <BsTelegram className="w-5 h-5 me-2 text-blue-500" />
              <span>تلگرام</span>
            </div>
            <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
          </div>
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <FaSpotify className="w-5 h-5 me-2 text-green-600" />
              <span>اسپاتیفای</span>
            </div>
            <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
          </div>
          <div className="my-3">
            <div className="flex items-center space-x-2">
              <FaSoundcloud className="w-5 h-5 me-2 text-orange-500" />
              <span>سانکلود</span>
            </div>
            <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
