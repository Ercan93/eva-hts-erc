<script setup>
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Highcharts from "highcharts";
import BarChart from "@/components/BarChart.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppTable from "@/components/AppTable.vue";
import AppPagination from "@/components/AppPagination.vue";

const options = [
  { value: 30, name: "Last 30 Days", selected: true },
  { value: 21, name: "Last 21 Days" },
  { value: 14, name: "Last 14 Days" },
  { value: 7, name: "Last 7 Days" },
];
const firstName = ref("");
const lastName = ref("");

const dateRange = ref(30);

const { getters, dispatch } = useStore();
const router = useRouter();

const tableHeaderOptions = reactive([
  { text: "SKU", value: "sku" },
  { text: "Product Name", value: "productName" },
  { text: "SKU Refund Rate", value: "skuRefundRate" },
]);

const tableBodyData = reactive([]);

// User Name
const userData = getters["user/getUser"];
if (userData !== null) {
  firstName.value = userData.Data.user.firstName;
  lastName.value = userData.Data.user.lastName;
} else {
  const user = JSON.parse(localStorage.getItem("eva-hts-user"));
  firstName.value = user.Data.firstName;
  lastName.value = user.Data.lastName;
}
// End of User Name

// Sales Overview
const categories = reactive([]);
const series = reactive([]);
const selectedElements = reactive([]);

dispatch("sales/fetchSalesOverview", dateRange.value);

watch(dateRange, (val) => {
  dispatch("sales/fetchSalesOverview", val);
});

watch(
  () => getters["sales/getSalesOverview"],
  (value) => {
    updateChart(value);
  }
);

function updateChart(salesOverview) {
  if (salesOverview.length > 0) {
    categories.splice(0, categories.length);
    series.splice(0, series.length);

    categories.push(...salesOverview.map((item) => item.date));
    series.push(
      {
        name: "Profit",
        data: salesOverview.map((item) => item.profit * 49),
        dataLabels: {
          enabled: false,
        },
      },
      {
        name: "FBM Sales",
        data: salesOverview.map((item) => item.prevYearAmount * 9),
        dataLabels: {
          enabled: false,
        },
      },
      {
        name: "FBA Sales",
        data: salesOverview.map((item) => item.prevYearOrderCount * 427),
        dataLabels: {
          enabled: true,
          formatter: function () {
            return "$ " + Highcharts.numberFormat(this.y, 0, ".", ",");
          },
          rotation: 270,
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "none",
          },
        },
      }
    );
  }
}
// End of Sales Overview

function handleDateSelect(val) {
  dateRange.value = val;
}

function handleElementsSelected(val) {
  selectedElements.splice(0, selectedElements.length);
  selectedElements.push(...val);
}

function logout() {
  dispatch("auth/logout").then(() => {
    router.push("/login");
  });
}
</script>

<template>
  <main
    class="Home container-fluid bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8"
  >
    <div class="flex items-center justify-between pb-8">
      <p class="text-3xl text-white font-bold">
        Welcome {{ firstName }} {{ lastName }}
      </p>
      <div class="flex">
        <AppSelect @optionSelected="handleDateSelect" :options="options" />
        <button
          class="px-4 py-2 ml-8 text-white bg-red-800 rounded-md hover:bg-red-600"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
    <div class="bg-white">
      <BarChart
        @elementsSelected="handleElementsSelected"
        :categories="categories"
        :series="series"
      />
    </div>
    <div class="mt-4">
      <AppTable
        :header-options="tableHeaderOptions"
        :body-data="tableBodyData"
      />
      <AppPagination :total-pages="1" :current-page="1" />
    </div>
  </main>
</template>
<style>
.Home {
  min-height: 100vh;
}
</style>
