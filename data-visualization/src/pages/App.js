import Graph from "../components/Graph.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import axios from "axios";
import SessionLoggedOut from "../components/SessionLoggedOut.js";
import LogoutBtn from "../components/LogoutBtn.js";
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
import { useParams, useNavigate } from "react-router-dom";

const exercises = ["Leg Press", "Dumbell Press", "Bicep Curl"];

function App({ loggedIn, loggedInUser }) {
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
      await axios.post("/data", { data });
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
      Graphs.push(
        <Graph
          key={idx}
          chartData={legPressChartData}
          loggedInUser={username}
        />
      );
    } else if (exercise === "Dumbell Press") {
      Graphs.push(
        <Graph
          key={idx}
          chartData={dumbellPressChartData}
          loggedInUser={username}
        />
      );
    } else {
      Graphs.push(
        <Graph
          key={idx}
          chartData={bicepCurlChartData}
          loggedInUser={username}
        />
      );
    }
  });

  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/");
  }

  if (!loggedIn) {
    return <SessionLoggedOut goToLoginPage={goToLoginPage} />;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex flex-row-reverse">
        <LogoutBtn goToLoginPage={goToLoginPage} />
      </div>
      <Form updateChartData={updateChartData} />
      {Graphs}
    </div>
  );
}

export default App;
