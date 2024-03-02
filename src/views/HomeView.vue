<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BarChart from "@/components/BarChart.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppTable from "@/components/AppTable.vue";
import AppPagination from "@/components/AppPagination.vue";

const firstName = ref("");
const lastName = ref("");
const options = [
  { value: 60, name: "Last 60 Days" },
  { value: 30, name: "Last 30 Days", selected: true },
  { value: 14, name: "Last 14 Days" },
  { value: 7, name: "Last 7 Days" },
];

const { getters, dispatch } = useStore();
const router = useRouter();

const userData = getters["user/getUser"];
if (userData !== null) {
  firstName.value = userData.Data.user.firstName;
  lastName.value = userData.Data.user.lastName;
} else {
  const user = JSON.parse(localStorage.getItem("eva-hts-user"));
  firstName.value = user.Data.firstName;
  lastName.value = user.Data.lastName;
}

dispatch("sales/setSalesOverview");

function logout() {
  dispatch("auth/logout").then(() => {
    router.push("/login");
  });
}
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
      <button
        class="px-4 py-2 text-white bg-red-800 rounded-md hover:bg-red-600"
        @click="logout"
      >
        Logout
      </button>
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
