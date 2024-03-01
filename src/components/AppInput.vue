<script setup>
import { ref, toRefs, onMounted, watch } from "vue";

const props = defineProps({
  inputId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "This field is required",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
  },
});

const inputValue = ref(props.value);

const { inputId, label, type, hasError, errorMessage } = toRefs(props);

onMounted(() => {
  if (props.onChange) {
    watch(inputValue, (newValue) => {
      props.onChange(newValue);
    });
  }
});
</script>

<template>
  <div class="AppInput">
    <label :for="inputId" class="block mb-2 text-sm font-medium text-gray-800"
      >{{ label }}
    </label>
    <input
      :type="type"
      :id="inputId"
      v-model="inputValue"
      class="w-full px-4 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      :class="{ error: hasError }"
      :required="{ required }"
    />
    <p class="error-message" v-if="hasError">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.AppInput {
  @apply flex flex-col w-full;
}

.error {
  @apply border border-red-500 rounded-md p-2 text-red-500;
}

.error-message {
  @apply text-sm text-red-500;
}
</style>
