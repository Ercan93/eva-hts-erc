<template>
  <div>
    <charts :options="chartOptions"></charts>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "BarChart",
  setup() {
    const selectedElements = reactive([]);

    const chartOptions = {
      chart: {
        type: "column",
        height: 600,
        backgroundColor: "#1e40af",
        plotBackgroundColor: "#1e40af",
        borderWidth: 0,
      },
      title: {
        text: "Daily Sales",
        align: "left",
        style: {
          color: "#fff",
        },
      },
      xAxis: {
        categories: [
          "Tuesday 19-09-2021",
          "Tuesday 14-09-2021",
          "Tuesday 11-09-2021",
          "Tuesday 12-10-2021",
          "Tuesday 26-10-2021",
        ],
        labels: {
          style: {
            color: "#fff",
          },
        },
        lineColor: "#1e40af",
        title: {
          style: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count trophies",
          style: {
            color: "#fff",
          },
        },
        stackLabels: {
          enabled: false,
        },
        gridLineColor: "#1e40af",
        labels: {
          style: {
            color: "#fff",
          },
        },
      },
      colors: ["#71ECC5", "#7F85E9", "#5D33EB"],
      legend: {
        align: "center",
        x: 0,
        verticalAlign: "bottom",
        y: 50,
        shadow: false,
        backgroundColor: "#1e3988",
        itemStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
        backgroundColor: "#2f3f3f",
        borderColor: "#444",
        borderRadius: 5,
        style: {
          color: "#fff",
        },
      },
      credits: {
        style: {
          color: "#1e40af",
        },
      },
      plotOptions: {
        column: {
          cursor: "pointer",
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
          events: {
            click: onBarClick,
          },
        },
        series: {
          dataLabels: {
            color: "#fff",
          },
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "FBM Sales",
          data: [3, 5, 1, 13, 8],
          dataLabels: {
            enabled: false,
          },
        },
        {
          name: "Profit",
          data: [0, 2, 6, 3, 4],
          dataLabels: {
            enabled: false,
          },
        },
        {
          name: "FBA Sales",
          data: [14, 8, 8, 12, 6],
        },
      ],
    };

    function onBarClick(event) {
      if (event.point === undefined) return;
      const { point } = event;
      if (selectedElements.includes(point)) {
        selectedElements.splice(selectedElements.indexOf(point), 1);
        point.color = "#7F85E9";
        chartOptions.series[0].data[point.index] = point;
        return;
      }

      if (selectedElements.length === 2) return;

      point.color = "green";
      chartOptions.series[0].data[point.index] = point;
      selectedElements.push(point);
    }

    return { chartOptions };
  },
};
</script>

<style>
.highcharts-container,
.highcharts-root {
  min-height: 700px !important;
}
</style>
