import Chart from "chart.js/auto";

let chart;
export const setDashboardChart = (labels, datapoints) => {
  chart && chart.destroy();
  const data = {
    labels: labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#0062ff",
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: " میلیون تومان",
          },
        },
      },
    },
  };

  const ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, config);
};

export const destroyChart = () => {
  chart.destroy();
};
