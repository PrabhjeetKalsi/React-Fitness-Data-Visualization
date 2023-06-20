let dateLabels = [
  "Jun 10, 2023",
  "Jun 11, 2023",
  "Jun 12, 2023",
  "Jun 13, 2023",
  "Jun 14, 2023",
  "Jun 15, 2023",
];
let legPressReps = [6, 7, 7, 8, 10, 11];
let legPressWeight = [70, 85, 100, 100, 130, 130];

export let legPressData = {
  labels: dateLabels,
  datasets: [
    {
      yAxisID: "left",
      label: "# of Reps",
      data: legPressReps,
      borderWidth: 1,
    },
    {
      yAxisID: "right",
      label: "Weight",
      data: legPressWeight,
      borderWidth: 1,
    },
  ],
};

export let legPressOptions = {
  responsive: true,
  plugins: {
    title: {
      text: "Leg Press",
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
