import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import { TbHandClick, TbSettingsCog, TbWorld } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      {/* The first part */}
      <div className="grid gap-6 mb-6 overflow-y-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-between items-center bg-[#0A0D31] p-4 rounded-xl">
          <div>
            <h3 className="text-sm py-1 text-gray-400">پول امروز</h3>
            <p className="text-lg font-bold ">
              $53,0
              <span className="text-green-400 px-1 text-sm">+55%</span>
            </p>
          </div>
          <MdOutlineAttachMoney className="w-10 h-10 p-2 bg-[#0075ff] text-white rounded-xl" />
        </div>

        <div className="flex justify-between items-center bg-[#0A0D31] p-4 rounded-xl">
          <div>
            <h3 className="text-sm py-1 text-gray-400">کاربران امروز</h3>
            <p className="text-lg font-bold ">
              2,300
              <span className="text-green-400 px-1 text-sm">+3%</span>
            </p>
          </div>
          <TbWorld className="w-10 h-10 p-2 bg-[#0075ff] text-white rounded-xl" />
        </div>

        <div className="flex justify-between items-center bg-[#0A0D31] p-4 rounded-xl">
          <div>
            <h3 className="text-sm py-1 text-gray-400">مشتریان جدید</h3>
            <p className="text-lg font-bold ">
              +3,462
              <span className="text-red-400 px-1 text-sm">-2%</span>
            </p>
          </div>
          <IoMdDocument className="w-10 h-10 p-2 bg-[#0075ff] text-white rounded-xl" />
        </div>

        <div className="flex justify-between items-center bg-[#0A0D31] p-4 rounded-xl">
          <div>
            <h3 className="text-sm py-1 text-gray-400">کل فروش</h3>
            <p className="text-lg font-bold ">
              $134
              <span className="text-green-400 px-1 text-sm">+5%</span>
            </p>
          </div>
          <FaCartShopping className="w-10 h-10 p-2 bg-[#0075ff] text-white rounded-xl" />
        </div>

      </div>

      {/* The second part */}
      <div className="lg:flex gap-6 mb-6 ">
        <div className="w-full my-6 lg:w-2/5 lg:my-0 rounded-xl">
          <img
            alt=""
            src="https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/cardimgfree.5771cbbb.png"
            className="max-w-full max-h-full object-cover rounded-xl transform scale-x-[-1] h-80"
          />
          <div className="absolute top-[650px] md:top-[400px] lg:top-64 z-10 p-6 ">
            <h3 className="text-gray-400 text-sm py-1">خوش آمدید</h3>
            <h2 className="text-2xl font-bold mb-3 ">فروشگاه پنل مدیریت</h2>
            <p className="text-gray-400 text-sm">
              خوشحالم که دوباره شما را می بینم!
            </p>
          </div>
        </div>

        <div className="w-full my-6 lg:w-1/4 lg:my-0 bg-gradient-custom backdrop-blur-lg p-4 rounded-xl">
          <h3 className="font-semibold py-1">میزان رضایت</h3>
          <p className="text-gray-400 text-sm">از همه پروژه ها</p>
          <div className="flex justify-center items-center ">
            <div
              className="radial-progress text-[#5184d0b6] w-44 h-44 mt-5"
              style={{ "--value": 70, "--size": "10rem" }}
              role="progressbar"
            >
              <div className="w-60 lg:w-36 h-20 rounded-2xl bg-[#090e24] flex items-center justify-around z-10 text-gray-400 ">
                <div className="text-sm">100%</div>
                <div className="text-3xl font-bold text-white">90%</div>
                <div className="text-sm">0%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-6 lg:w-1/3 lg:my-0 bg-gradient-custom-1 backdrop-blur-lg p-4 rounded-xl">
          <h3 className="font-semibold py-1">ردیابی ارجاع</h3>
          <div className="flex mt-5">
            <div className="w-2/3 flex justify-center">
              <div
                className="radial-progress text-[#0fa98fd3] w-44 h-44 mt-5"
                style={{ "--value": 70, "--size": "10rem" }}
                role="progressbar"
              >
                <div className="w-28 h-20 text-center z-10 text-gray-400 ">
                  <div className="text-sm">ایمنی</div>
                  <div className="text-4xl font-bold text-white my-1">9.3</div>
                  <div className="text-sm">امتیاز </div>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="w-full rounded-lg bg-[#090e24] my-3 p-3">
                <p className="text-gray-400 my-1">پیوست</p>
                <p className="text-white font-bold my-1">145</p>
                <p className="text-white font-bold my-1">کاربران</p>
              </div>
              <div className="w-full rounded-lg bg-[#090e24] my-3 p-3">
                <p className="text-gray-400 my-1">جوایز</p>
                <p className="text-white font-bold my-1">145</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* The third part */}
      <div className="lg:flex gap-6 mb-6 ">
        <div className="w-full lg:w-3/5 my-6 lg:my-0 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-white py-1">بررسی فروش</h3>
          <p className="text-sm text-gray-400">
            <span className="text-green-400">5 درصد بیشتر</span> در سال 1403
          </p>
        </div>

        <div className="w-full lg:w-2/5 my-6 lg:my-0 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-lg shadow-lg">

          <h3 className="font-semibold text-white py-1 mt-8">کاربران فعال</h3>
          <p className="text-sm text-gray-400">
            <span className="text-green-400">(+23)</span> نسبت به هفته گذشته
          </p>

          <div className="grid gap-4 mt-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center">
                <RiFileUserFill className="bg-[#0075ff] p-2 rounded-xl w-8 h-8" />
                <p className="text-sm font-bold text-gray-400 ms-1">کاربران</p>
              </div>
              <p className="text-lg  text-start mt-2 text-white">32,984</p>
              <progress
                className="progress progress-info w-20"
                value="40"
                max="80"
              ></progress>
            </div>

            <div>
              <div className="flex items-center">
                <TbHandClick className="bg-[#0075ff] p-2 rounded-xl w-8 h-8" />
                <p className="text-sm font-bold text-gray-400 ms-1">کلیک</p>
              </div>
              <p className="text-lg  text-start mt-2 text-white">2.42M</p>
              <progress
                className="progress progress-info w-20"
                value="40"
                max="80"
              ></progress>
            </div>

            <div>
              <div className="flex items-center">
                <FaShoppingCart className="bg-[#0075ff] p-2 rounded-xl w-8 h-8" />
                <p className="text-sm font-bold text-gray-400 ms-1">فروش</p>
              </div>
              <p className="text-lg  text-start mt-2 text-white">$2,400</p>
              <progress
                className="progress progress-info w-20"
                value="40"
                max="80"
              ></progress>
            </div>

            <div>
              <div className="flex items-center">
                <TbSettingsCog className="bg-[#0075ff] p-2 rounded-xl w-8 h-8" />
                <p className="text-sm font-bold text-gray-400 ms-1">موارد</p>
              </div>
              <p className="text-lg  text-start mt-2 text-white">320</p>
              <progress
                className="progress progress-info w-20"
                value="40"
                max="80"
              ></progress>
            </div>
          </div>

        </div>
      </div>

      {/* The fourth section */}
      <div className="lg:flex gap-6 mb-6 ">
        <div className="w-full lg:w-2/3 my-6 lg:my-0 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
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

        <div className="w-full lg:w-1/3 my-6 lg:my-0 bg-gradient-custom backdrop-blur-[100px] p-6 rounded-xl shadow-lg">
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
                <IoMdNotifications className="w-5 h-5 me-2 text-red-500"/>
                <span>2400 دلار، تغییرات طراحی</span>
              </div>
              <span className="text-sm ms-7 text-gray-400">22 مرداد 7:20 PM</span>
            </div>
            <div className="my-3">
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="w-5 h-5 me-2 text-yellow-300"/>
                <span>سفارش جدید</span>
              </div>
              <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
            </div>
            <div className="my-3">
              <div className="flex items-center space-x-2">
                <BsTelegram className="w-5 h-5 me-2 text-blue-500"/>
                <span>تلگرام</span>
              </div>
              <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
            </div>
            <div className="my-3">
              <div className="flex items-center space-x-2">
                <FaSpotify className="w-5 h-5 me-2 text-green-600"/>
                <span>اسپاتیفای</span>
              </div>
              <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
            </div>
            <div className="my-3">
              <div className="flex items-center space-x-2">
                <FaSoundcloud className="w-5 h-5 me-2 text-orange-500"/>
                <span>سانکلود</span>
              </div>
              <span className="text-sm ms-7 text-gray-400">21 شهریور 11 PM</span>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Dashboard;
