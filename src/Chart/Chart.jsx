import { Chart } from "react-google-charts";
import "./Chart.css";

export function MyChart() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 7],
    ["Commute", 1],
    ["Cook", 1],
    ["Eat", 1],
    ["Hang around", 1],
    ["Study", 3.5],
    ["Read/Watch", 1],
    ["Scroll", 0.5],
    ["Sleep", 8],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <div className="chart">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
}
