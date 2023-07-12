let dateLabels = [
  "Jun 10, 2023",
  "Jun 11, 2023",
  "Jun 12, 2023",
  "Jun 13, 2023",
  "Jun 14, 2023",
  "Jun 15, 2023",
];
let dumbellPressReps = [6, 7, 7, 8, 10, 11];
let dumbellPressWeight = [30, 40, 30, 40, 40, 30];
let username = ["", "", "", "", "", ""];

export let dumbellPressData = {
  username: username,
  labels: dateLabels,
  datasets: [
    {
      yAxisID: "left",
      label: "# of Reps",
      data: dumbellPressReps,
      borderWidth: 1,
    },
    {
      yAxisID: "right",
      label: "Weight",
      data: dumbellPressWeight,
      borderWidth: 1,
    },
  ],
};

export let dumbellPressOptions = {
  responsive: true,
  plugins: {
    title: {
      text: "Dumbell Press",
      align: "center",
      display: true,
      font: function (context) {
        var reqWidth = Math.round(context.chart.width / 2);
        var size = Math.round(reqWidth / 12);
        size = size > 30 ? 30 : size; // setting max limit to 12
        return {
          size: size,
          weight: "bold",
        };
      },
    },
  },
  tension: 0.3,
  scales: {
    x: {
      title: {
        text: "Date",
        display: true,
        font: function (context) {
          var reqWidth = Math.round(context.chart.width / 2);
          var size = Math.round(reqWidth / 16);
          size = size > 20 ? 20 : size;
          return {
            size: size,
            weight: "bold",
          };
        },
      },
    },
    left: {
      title: {
        text: "Repititions",
        display: true,
        font: function (context) {
          var reqWidth = Math.round(context.chart.width / 2);
          var size = Math.round(reqWidth / 16);
          size = size > 20 ? 20 : size;
          return {
            size: size,
            weight: "bold",
          };
        },
      },
      beginAtZero: true,
    },
    right: {
      position: "right",
      title: {
        text: "Weight",
        display: true,
        font: function (context) {
          var reqWidth = Math.round(context.chart.width / 2);
          var size = Math.round(reqWidth / 16);
          size = size > 20 ? 20 : size;
          return {
            size: size,
            weight: "bold",
          };
        },
      },
      beginAtZero: true,
    },
  },
};
