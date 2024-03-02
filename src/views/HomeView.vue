<script setup>
import StackedBarChart from "@/components/StackedBarChart.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppTable from "@/components/AppTable.vue";
import AppPagination from "@/components/AppPagination.vue";

const options = [
  { value: 60, name: "Last 60 Days" },
  { value: 30, name: "Last 30 Days", selected: true },
  { value: 14, name: "Last 14 Days" },
  { value: 7, name: "Last 7 Days" },
];

const tableHeaderOptions = [
  { value: "daily", name: "Date" },
  { value: "profit", name: "Profit" },
  { value: "fba", name: "FBA" },
  { value: "fbm", name: "FBM" },
  { value: "wearables", name: "Wearables" },
  { value: "services", name: "Services" },
];

const tableBodyData = [
  {
    id: 1,
    options: [
      { value: "Tuesday 19-09-2021" },
      { value: 140 },
      { value: 16 },
      { value: 14 },
      { value: 12 },
      { value: 20 },
    ],
  },
  {
    id: 2,
    options: [
      { value: "Tuesday 14-09-2021" },
      { value: 124 },
      { value: 20 },
      { value: 14 },
      { value: 12 },
      { value: 30 },
    ],
  },
  {
    id: 3,
    options: [
      { value: "Tuesday 11-09-2021" },
      { value: 112 },
      { value: 20 },
      { value: 18 },
      { value: 14 },
      { value: 36 },
    ],
  },
  {
    id: 4,
    options: [
      { value: "Tuesday 12-10-2021" },
      { value: 118 },
      { value: 24 },
      { value: 14 },
      { value: 14 },
      { value: 36 },
    ],
  },
  {
    id: 5,
    options: [
      { value: "Tuesday 26-10-2021" },
      { value: 124 },
      { value: 18 },
      { value: 16 },
      { value: 18 },
      { value: 26 },
    ],
  },
  {
    id: 6,
    options: [
      { value: "Tuesday 02-11-2021" },
      { value: 130 },
      { value: 20 },
      { value: 18 },
      { value: 14 },
      { value: 28 },
    ],
  },
];

</script>

<template>
  <main class="container-fluid bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8">
    <div class="flex items-center justify-between pb-8">
      <p class="text-3xl text-white font-bold">Daily Sales</p>
      <AppSelect :options="options" />
    </div>
    <StackedBarChart />
    <AppTable :header-options="tableHeaderOptions" :body-data="tableBodyData" />
    <AppPagination :total-pages="7" :current-page="1" />
  </main>
</template>
