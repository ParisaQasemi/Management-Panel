import { ErrorMessage, FastField } from "formik";
import React, { useEffect, useState } from "react";
import FormikError from "./FormikError";
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import jMoment from "moment-jalaali";

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const months = [
  { id: 1, value: "فروردین" },
  { id: 2, value: "اردیبهشت" },
  { id: 3, value: "خرداد" },
  { id: 4, value: "تیر" },
  { id: 5, value: "مرداد" },
  { id: 6, value: "شهریور" },
  { id: 7, value: "مهر" },
  { id: 8, value: "آبان" },
  { id: 9, value: "آذر" },
  { id: 10, value: "دی" },
  { id: 11, value: "بهمن" },
  { id: 12, value: "اسفند" },
];

const Date = ({ formik, name, label, yearsLimit, initialDate}) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState(jMoment().jYear());
  const [years, setYears] = useState([]);
  const [showConfig, setShowConfig] = useState(false);
  // const yearsLimit = yearsLimit || { from: 10, to: 10 };

  useEffect(() => {
    let now = jMoment(initialDate)
    setDay(now.jDate());
    setMonth((now.jMonth()) +1);
    setYear(now.jYear());
  }, []);

  const handleShowDateConfig = () => {
    const newYears = [];
    for (
      let index = parseInt(year) - (yearsLimit?.from || 100);
      index <= parseInt(year) + (yearsLimit?.to || 0);
      index++
    ) {
      newYears.push(index);
    }
    setYears(newYears); // مقدار جدید به طور کامل جایگزین می‌شود
    setShowConfig(true);
  };

  const handleSetInputDate = (e) => {
    e.stopPropagation();
    formik.setValues({
      ...formik.values,
      [name]: `${day} / ${month} / ${year}`,
    });
    setShowConfig(false);
  };
  return (
    <div className={`wrap-input100 validate-input form_date_picker`}>
      <div className="mb-3 flex justify-between" onClick={handleShowDateConfig}>
        <span className="w-block text-white font-bold w-32"> {label} </span>
        <FastField
          type="text"
          name={name}
          className="w-full bg-transparent text-white text-sm p-1 border-b-[1px] border-white focus:outline-none"
          placeholder={"جهت انتخاب تاریخ کلیک کنید"}
        />
      </div>

      {showConfig ? (
        <div className="bg-white flex justify-between m-0 p-1 rounded-lg">
          <div className="flex justify-center items-center w-full p-0">
            <select
              className="bg-transparent text-black text-center"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center w-full p-0">
            <select
              className="bg-transparent text-black text-center"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center w-full p-0">
            <select
              className="bg-transparent text-black text-center"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((y, i) => (
                <option key={i} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center p-0">
            <FaCheck onClick={handleSetInputDate} />
          </div>
        </div>
      ) : null}
      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Date;
