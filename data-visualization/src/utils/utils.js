import axios from "axios";
import { legPressData } from "../mocks/legPressMockGraphData";
import { dumbellPressData } from "../mocks/dumbellPressMockGraphData";
import { bicepCurlData } from "../mocks/bicepCurlMockGraphData";

export function formatDate(date) {
  const dateParts = date.split("-");
  const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}

export const getDataFromServer = async () => {
  try {
    const response = await axios.get("/getdata");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateMocks = async () => {
  await getDataFromServer().then((fetchedData) => {
    fetchedData.data.forEach((d) => {
      switch (d.exercise) {
        case "Leg Press":
          legPressData.labels.push(d.date);
          legPressData.datasets[0].data.push(d.reps);
          legPressData.datasets[1].data.push(d.weight);
          legPressData.username.push(d.username);
          break;
        case "Dumbell Press":
          dumbellPressData.labels.push(d.date);
          dumbellPressData.datasets[0].data.push(d.reps);
          dumbellPressData.datasets[1].data.push(d.weight);
          dumbellPressData.username.push(d.username);
          break;
        case "Bicep Curl":
          bicepCurlData.labels.push(d.date);
          bicepCurlData.datasets[0].data.push(d.reps);
          bicepCurlData.datasets[1].data.push(d.weight);
          bicepCurlData.username.push(d.username);
          break;
        default:
          break;
      }
    });
  });
};

export const filterData = (username, chartData) => {
  let indicesToRemove = [];
  chartData.data.username?.forEach((name, idx) => {
    if (name !== "" && name !== username) {
      indicesToRemove.push(idx);
    }
  });
  indicesToRemove.sort((a, b) => b - a);
  for (let i = 0; i < indicesToRemove.length; i++) {
    chartData.data.labels.splice(indicesToRemove[i], 1);
    chartData.data.username.splice(indicesToRemove[i], 1);
    chartData.data.datasets[0].data.splice(indicesToRemove[i], 1);
    chartData.data.datasets[1].data.splice(indicesToRemove[i], 1);
  }
};
