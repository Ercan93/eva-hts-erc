<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
  },
  optionSelected: {
    type: Function,
  },
});

const selected = ref(props.options[0].value);

const { options, label } = toRefs(props);
</script>

<template>
  <div class="max-w-sm">
    <label
      v-if="label"
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900"
      >{{ label }}</label
    >
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full py-3 px-4"
      v-model="selected"
      @change="$emit('optionSelected', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.selected"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
