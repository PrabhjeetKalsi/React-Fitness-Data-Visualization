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
          break;
        case "Dumbell Press":
          dumbellPressData.labels.push(d.date);
          dumbellPressData.datasets[0].data.push(d.reps);
          dumbellPressData.datasets[1].data.push(d.weight);
          break;
        case "Bicep Curl":
          bicepCurlData.labels.push(d.date);
          bicepCurlData.datasets[0].data.push(d.reps);
          bicepCurlData.datasets[1].data.push(d.weight);
          break;
      }
    });
  });
};
