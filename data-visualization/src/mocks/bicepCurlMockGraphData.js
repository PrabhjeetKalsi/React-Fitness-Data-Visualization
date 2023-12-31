let dateLabels = [];
let bicepCurlReps = [];
let bicepCurlWeight = [];
let username = [];

export let bicepCurlData = {
  username: username,
  labels: dateLabels,
  datasets: [
    {
      yAxisID: "left",
      label: "# of Reps",
      data: bicepCurlReps,
      borderWidth: 1,
    },
    {
      yAxisID: "right",
      label: "Weight",
      data: bicepCurlWeight,
      borderWidth: 1,
    },
  ],
};

export let bicepCurlOptions = {
  responsive: true,
  plugins: {
    title: {
      text: "Bicep Curl",
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
