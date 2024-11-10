import { Chart } from "react-google-charts";
import "./App.css";
import { UserProfile } from "./UserProfile/UserProfile";

function App() {
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
    <div>
      <UserProfile />
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"120%"}
        height={"800px"}
      />
    </div>
  );
}

export default App;
