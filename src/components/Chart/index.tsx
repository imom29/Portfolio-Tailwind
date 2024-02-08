import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const data = {
  labels: ["Easy", "Medium", "Hard"],
  datasets: [
    {
      label: "Problems Solved",
      data: [180, 293, 43],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

export default () => {
  return (
    <div className="relative h-100 w-96">
      <Doughnut
        data={data}
        redraw={true}
        options={{
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          font: {
            size: 100,
            weight: "bold",
          },
          plugins: {
            title: {
              display: true,
              text: "Problems Solved",
              color: "white",
              font: {
                size: 20,
                weight: "bold",
              },
              position: "top",
            },
          },
        }}
      />
    </div>
  );
};
