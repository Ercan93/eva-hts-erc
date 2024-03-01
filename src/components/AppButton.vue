<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  buttonText: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
  },
});

const { type, buttonText, onClick } = toRefs(props);
</script>

<template>
  <button
    :type="type"
    @click="onClick"
    class="AppButton w-full px-4 py-2 text-white text-xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 hover:from-blue-700 hover:via-blue-500 hover:to-indigo-700 rounded-md"
  >
    {{ buttonText }}
  </button>
</template>
