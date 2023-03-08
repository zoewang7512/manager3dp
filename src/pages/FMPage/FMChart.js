import React, { useContext } from "react";
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

export const options = {
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
};

const FMChart = () => {
  const { last5FMdata } = useContext(InfoContext);
  const userData = {
    labels: last5FMdata.map((data) => data.date),
    datasets: [
      {
        label: "運行",
        data: last5FMdata.map((value) => value.runEqpt),

        backgroundColor: ["#54B4D3"],
        borderColor: "white",
        borderWidth: 0.5
      },
      {
        label: "閒置",
        data: last5FMdata.map((value) => value.idleEqpt),

        backgroundColor: ["#332D2D"],
        borderColor: "white",
        borderWidth: 0.5
      },
      {
        label: "故障",
        data: last5FMdata.map((value) => value.faultEqpt),
        backgroundColor: ["#ff6d28"],
        borderColor: "white",
        borderWidth: 0.5
      }
    ]
  };

  return (
    <div className="progressBar">
      <Bar options={options} data={userData} />
    </div>
  );
};
export default FMChart;
