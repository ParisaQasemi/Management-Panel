import React from "react";
import { useEffect } from "react";
import { destroyChart, setDashboardChart } from "../../services/dashboardChart";

const SaleChart = () => {
  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    setDashboardChart(labels, datapoints);
    return () => {
      destroyChart();
    };
  }, []);
  return (
    <div className="w-full">
      <canvas id="myChart" height="195" ></canvas>
    </div>
  );
};

export default SaleChart;
