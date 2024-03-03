<template>
  <charts :options="chartOptions"></charts>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "BarChart",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
  },
  emits: ["elementsSelected"],
  setup(props, context) {
    const selectedElements = reactive([]);

    const chartOptions = {
      chart: {
        type: "column",
        height: 600,
        borderWidth: 0,
      },
      touch: {
        enabled: true,
      },
      title: {
        text: "Daily Sales",
        align: "left",
      },
      xAxis: {
        categories: props.categories,
      },
      series: props.series,
      yAxis: {
        min: 0,
        title: {
          text: "Amount($)",
        },
        stackLabels: {
          enabled: false,
        },
      },
      colors: ["#71ECC5", "#5D33EB", "#7F85E9"],
      legend: {
        align: "center",
        x: 0,
        verticalAlign: "bottom",
        y: 50,
        shadow: false,
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
        borderColor: "#444",
        borderRadius: 5,
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
      },
    };

    function onBarClick(event) {
      if (event.point === undefined || event.point.series.name !== "FBA Sales")
        return;
      const { point } = event;
      if (selectedElements.includes(point)) {
        selectedElements.splice(selectedElements.indexOf(point), 1);
        point.color = "#7F85E9";
        context.emit("elementsSelected", selectedElements);
        return;
      }

      if (selectedElements.length === 2) return;

      point.color = "green";
      selectedElements.push(point);
      context.emit("elementsSelected", selectedElements);
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
