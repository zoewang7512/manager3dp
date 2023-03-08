import React, { useState, useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import InfoContext from "../../context/InfoContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PMChart = () => {
  const { last5data } = useContext(InfoContext);
  const userData = {
    labels: last5data.map((data) => data.date),
    datasets: [
      {
        label: "合格產品數",
        data: last5data.map((value) => value.currentOutput),
        backgroundColor: ["#ff6d28"],
        borderColor: "white",
        borderWidth: 1
      },
      {
        label: "不良產品數",
        data: last5data.map((value) => value.planOutput - value.currentOutput),
        backgroundColor: ["#212529"],
        borderColor: "white",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="pmchart">
      <h4>圖表</h4>

      <Bar data={userData} />
    </div>
  );
};
export default PMChart;
