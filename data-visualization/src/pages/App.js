import Graph from "../components/Graph.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import axios from "axios";
import { useState } from "react";
import {
  legPressOptions,
  legPressData,
} from "../mocks/legPressMockGraphData.js";
import {
  dumbellPressData,
  dumbellPressOptions,
} from "../mocks/dumbellPressMockGraphData.js";
import {
  bicepCurlData,
  bicepCurlOptions,
} from "../mocks/bicepCurlMockGraphData.js";
import { useParams } from "react-router-dom";

const exercises = ["Leg Press", "Dumbell Press", "Bicep Curl"];

function App({ loggedIn }) {
  //Leg Press State Def
  const [legPressChartData, setLegPressChartData] = useState({
    options: legPressOptions,
    data: legPressData,
  });

  //Dumbell Press State Def
  const [dumbellPressChartData, setDumbellPressChartData] = useState({
    options: dumbellPressOptions,
    data: dumbellPressData,
  });

  //Bicep Curl State Def
  const [bicepCurlChartData, setBicepCurlChartData] = useState({
    options: bicepCurlOptions,
    data: bicepCurlData,
  });

  const { username } = useParams();

  const sendDataToServer = async (data) => {
    try {
      const response = await axios.post("/data", { data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateChartData = (formData) => {
    const { exercise, weight, reps, date } = formData;
    sendDataToServer({ ...formData, username });
    if (exercise === "Leg Press") {
      legPressChartData.data.datasets.forEach((dataset, idx) => {
        if (idx === 1) {
          dataset.data = [...dataset.data, weight];
        } else {
          dataset.data = [...dataset.data, reps];
        }
      });
      setLegPressChartData({
        ...legPressChartData,
        data: {
          labels: [...legPressChartData.data.labels, date],
          datasets: [...legPressChartData.data.datasets],
        },
      });
    } else if (exercise === "Dumbell Press") {
      dumbellPressChartData.data.datasets.forEach((dataset, idx) => {
        if (idx === 1) {
          dataset.data = [...dataset.data, weight];
        } else {
          dataset.data = [...dataset.data, reps];
        }
      });
      setDumbellPressChartData({
        ...dumbellPressChartData,
        data: {
          labels: [...dumbellPressChartData.data.labels, date],
          datasets: [...dumbellPressChartData.data.datasets],
        },
      });
    } else if (exercise === "Bicep Curl") {
      bicepCurlChartData.data.datasets.forEach((dataset, idx) => {
        if (idx === 1) {
          dataset.data = [...dataset.data, weight];
        } else {
          dataset.data = [...dataset.data, reps];
        }
      });
      setBicepCurlChartData({
        ...bicepCurlChartData,
        data: {
          labels: [...bicepCurlChartData.data.labels, date],
          datasets: [...bicepCurlChartData.data.datasets],
        },
      });
    }
  };

  const Graphs = [];
  exercises.forEach((exercise, idx) => {
    if (exercise === "Leg Press") {
      Graphs.push(<Graph key={idx} chartData={legPressChartData} />);
    } else if (exercise === "Dumbell Press") {
      Graphs.push(<Graph key={idx} chartData={dumbellPressChartData} />);
    } else {
      Graphs.push(<Graph key={idx} chartData={bicepCurlChartData} />);
    }
  });

  if (!loggedIn) {
    return <h1>Page Not Found!!!</h1>;
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
