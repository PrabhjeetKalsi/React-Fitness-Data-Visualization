import Graph from "./components/Graph.js";
import Form from "./components/Form.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import { options, data } from "../src/mocks/mockGraphData.js";

function App() {
  const [chartData, setChartData] = useState({
    options: options,
    data: data,
  });

  const updateChartData = (formData) => {
    const { exercise, weight, reps, date } = formData;
    chartData.data.datasets.forEach((dataset, idx) => {
      if (idx === 1) {
        dataset.data = [...dataset.data, weight];
      } else {
        dataset.data = [...dataset.data, reps];
      }
    });
    setChartData({
      ...chartData,
      data: {
        labels: [...chartData.data.labels, date],
        datasets: [...chartData.data.datasets],
      },
    });
  };

  const Graphs = [];
  for (let i = 0; i < 3; i++) {
    Graphs.push(<Graph key={i} chartData={chartData} />);
  }

  return (
    <div className="App">
      <Navbar />
      <Form updateChartData={updateChartData} />
      {Graphs}
    </div>
  );
}

export default App;
