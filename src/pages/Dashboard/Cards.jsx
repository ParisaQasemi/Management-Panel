import React, { useEffect, useState } from "react";
import { getOrdersStatisticsService } from "../../services/order";
import SpinnerLoad from "../../component/SpinnerLoad";
import Card from "./Card";
import { FaDolly, FaLuggageCart, FaMoneyCheckAlt, FaShoppingBasket } from "react-icons/fa";

const cardObjects = [
  {
    key: 1,
    name: "carts",
    currentValue: "",
    title: "سبد خرید امروز",
    desc: "سبد های خرید مانده امروز",
    icon: <FaShoppingBasket />,
    lastWeekValue: "",
    lastMonthValue: "",
    color: "bg-pink-600", 
  },
  {
    key: 2,
    name: "pendingOrders",
    currentValue: "",
    title: "سفارشات مانده امروز",
    desc: " سفارشات معلق و فاقد پرداختی",
    icon: <FaDolly />,
    lastWeekValue: "",
    lastMonthValue: "",
    color: "bg-yellow-300"
  },
  {
    key: 3,
    name: "successOrders",
    currentValue: "",
    title: "سفارشات امروز",
    desc: "سفارشات کامل و دارای پرداختی",
    icon: <FaLuggageCart />,
    lastWeekValue: "",
    lastMonthValue: "",
    color: "bg-green-400", 

  },
  {
    key: 4,
    name: "successOrdersAmount",
    currentValue: "",
    title: "درآمد امروز",
    desc: "جمع مبالغ پرداختی (تومان)",
    icon: <FaMoneyCheckAlt />,
    lastWeekValue: "",
    lastMonthValue: "",
    color: "bg-red-500", 

  },
];

const Cards = () => {
  const [cardInfos, setCardInfos] = useState(cardObjects);
  const [loading, setLoading] = useState(false);

  const handleGetCardInfos = async () => {
    setLoading(true);
    const res = await getOrdersStatisticsService();
    setLoading(false);
    if (res.status === 200) {
      const data = res.data.data;
      let newCardObj = [...cardObjects];
      for (const key in data) {
        const index = newCardObj.findIndex((co) => co.name == key);
        newCardObj[index].currentValue = data[key].today;
        newCardObj[index].lastWeekValue = data[key].thisWeek;
        newCardObj[index].lastMonthValue = data[key].thisMonth;
      }
      setCardInfos(newCardObj);
    }
  };

  useEffect(() => {
    handleGetCardInfos();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {loading ? (
        <SpinnerLoad className="text-blue-300" /> //colorClass={""}
      ) : (
        cardInfos.map((cardInfo) => <Card {...cardInfo} />)
      )}
    </div>
  );
};

export default Cards;
