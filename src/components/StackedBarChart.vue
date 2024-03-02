<script>
import { reactive } from "vue";
import { AgChartsVue } from "ag-charts-vue3";

export default {
  name: "StackedBarChart",
  components: {
    AgChartsVue,
  },
  setup() {
    const options = reactive({
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      data: [
        {
          daily: "Tuesday 19-09-2021",
          profit: 140,
          fba: 16,
          fbm: 14,
          wearables: 12,
          services: 20,
        },
        {
          daily: "Tuesday 14-09-2021",
          profit: 124,
          fba: 20,
          fbm: 14,
          wearables: 12,
          services: 30,
        },
        {
          daily: "Tuesday 11-09-2021",
          profit: 112,
          fba: 20,
          fbm: 18,
          wearables: 14,
          services: 36,
        },
        {
          daily: "Tuesday 12-10-2021",
          profit: 118,
          fba: 24,
          fbm: 14,
          wearables: 14,
          services: 36,
        },
        {
          daily: "Tuesday 26-10-2021",
          profit: 124,
          fba: 18,
          fbm: 16,
          wearables: 18,
          services: 26,
        },
        {
          daily: "Tuesday 02-11-2021",
          profit: 108,
          fba: 20,
          fbm: 16,
          wearables: 18,
          services: 40,
        },
        {
          daily: "Tuesday 09-11-2021",
          profit: 96,
          fba: 22,
          fbm: 18,
          wearables: 24,
          services: 42,
        },
        {
          daily: "Tuesday 16-11-2021",
          profit: 104,
          fba: 22,
          fbm: 14,
          wearables: 20,
          services: 40,
        },
        {
          daily: "Tuesday 17-11-2021",
          profit: 104,
          fba: 22,
          fbm: 14,
          wearables: 20,
          services: 40,
        },
        {
          daily: "Tuesday 09-11-2021",
          profit: 104,
          fba: 22,
          fbm: 14,
          wearables: 20,
          services: 40,
        },
        {
          daily: "Tuesday 11-10-2021",
          profit: 104,
          fba: 22,
          fbm: 14,
          wearables: 20,
          services: 40,
        },
      ],
      series: [
        {
          type: "bar",
          xKey: "daily",
          yKey: "profit",
          yName: "Profit",
          fill: "#71ECC5",
          stacked: true,
          tooltip: {
            enabled: true,
            renderer: function (params) {
              return `<div class="bg-blue-400">${params.datum.profit}</div>`;
            },
          },
        },
        {
          type: "bar",
          xKey: "daily",
          yKey: "fba",
          yName: "FBA Sales",
          fill: "#7F85E9",
          stacked: true,
          listeners: {
            nodeClick: function (params) {
              console.log(params);
            },
          },
        },

        {
          type: "bar",
          xKey: "daily",
          yKey: "fbm",
          yName: "FBM Sales",
          fill: "#5D33EB",
          stacked: true,
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Amount ($)",
          },
          tick: {
            interval: 20,
          },
        },
      ],
    });

    return {
      options,
    };
  },
};
</script>

<template>
  <div class="StackedBarChartWrapper">
    <AgChartsVue :options="options" />
  </div>
</template>

<style>
.StackedBarChart {
  width: 100%;
  height: 100%;
}
.ag-chart-wrapper > canvas {
  width: 100% !important;
  height: 50vh !important;
}
</style>
