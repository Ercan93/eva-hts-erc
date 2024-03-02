<script setup>
import { toRefs } from "vue";

const props = defineProps({
  headerOptions: {
    type: Array,
    required: true,
  },
  bodyData: {
    type: Array,
    required: true,
  },
});

const { headerOptions } = toRefs(props);
</script>
<template>
  <div class="relative overflow-x-auto mt-8">
    <table
      class="w-full text-sm text-white table-auto border-collapse border-t border-b border-white"
    >
      <thead
        class="text-xs text-white text-left uppercase font-medium border-b"
      >
        <tr>
          <th
            v-for="option in headerOptions"
            :key="option.value"
            scope="col"
            class="px-6 py-3"
          >
            {{ option.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in bodyData" :key="data.id" class="text-left">
          <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
            {{ data.id }}
          </th>
          <td
            v-for="option in data.options"
            :key="option.value"
            class="px-6 py-4"
          >
            {{ option.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
