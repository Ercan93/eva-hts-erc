<script setup>
import StackedBarChart from "@/components/StackedBarChart.vue";
import AppSelect from "@/components/AppSelect.vue";

const options = [
  { value: 60, name: "Last 60 Days" },
  { value: 30, name: "Last 30 Days", selected: true },
  { value: 14, name: "Last 14 Days" },
  { value: 7, name: "Last 7 Days" },
];
</script>

<template>
  <main class="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950">
    <div class="flex items-center justify-between p-8">
      <p class="text-3xl text-white font-bold">Daily Sales</p>
      <AppSelect :options="options" />
    </div>
    <StackedBarChart />
  </main>
</template>
