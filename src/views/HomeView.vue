<script setup>
import BarChart from "@/components/BarChart.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppTable from "@/components/AppTable.vue";
import AppPagination from "@/components/AppPagination.vue";
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();
const options = [
  { value: 60, name: "Last 60 Days" },
  { value: 30, name: "Last 30 Days", selected: true },
  { value: 14, name: "Last 14 Days" },
  { value: 7, name: "Last 7 Days" },
];

const firstName = ref("");
const lastName = ref("");

const userData = store.getters["user/getUser"];
if (userData !== null) {
  firstName.value = userData[0].Data.user.firstName;
  lastName.value = userData[0].Data.user.lastName;
}

store.dispatch("sales/setSalesOverview", {
  email: "email",
  password: "password",
});
</script>

<template>
  <main
    class="container-fluid bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8"
  >
    <div class="flex items-center justify-between pb-8">
      <p class="text-3xl text-white font-bold">
        Welcome {{ firstName }} {{ lastName }}
      </p>
      <AppSelect :options="options" />
    </div>
    <div class="bg-white">
      <BarChart />
    </div>
    <div class="mt-4">
      <AppTable
        :header-options="tableHeaderOptions"
        :body-data="tableBodyData"
      />
      <AppPagination :total-pages="7" :current-page="1" />
    </div>
  </main>
</template>
